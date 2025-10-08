"use server"

import { redirect } from "next/navigation";
import { ActionResponse, ActionResult, Customer, CustomerDTO, UpdateAccountResult, UpdateAmountResult, User } from "../asset/definitions";
import {  createCustomerSession, createSession, deleteSession, getSession, SessionData } from "../auth";
import { insertCustomer,updateCustomer,updateCustomerAccountType,updateCustomerAmount,
    deleteCustomerByEmail,getCustomerByID,getCustomerByEmail,getAllCustomer, 
    loginUser,
    getCustomerByUUID} from "../repository/customerRepository";
import { customerSchema, fromDtoToModel, userSchema } from "../validation/validators";

const emptyData =  {
                    firstname:"",
                    lastname:"",
                    email:"",
                    job:"",
                    phoneNumber:"",
                    accountNumber:0,
                    accountType:"",
                    amount:0,
                    customerID:''
                }

export async function handleCustomerForm(prevState:ActionResponse|null,customerData:FormData):Promise<ActionResponse>
{

    const firstname = customerData.get('firstname')
    const lastname = customerData.get('lastname')
    const email = customerData.get('email')
    const job =customerData.get('job')
     const phone = customerData.get('phone')
     const accountType = customerData.get('accountType')
     const accountNumber = customerData.get('accountNumber')
     const amount = customerData.get('amount')
 
   
   let safeData = null
   const customer:CustomerDTO ={
     firstname:String(firstname),
     lastname:String(lastname),
     email:String(  email),
     job: String(job),
     phoneNumber:String(phone),
     accountNumber:Number(accountNumber),
     accountType:String(accountType),
     amount:Number(amount)
   }
   const validDto = await customerSchema.safeParse(customer)
   
   if(validDto.error || !validDto.data)
   {
      return {
        success:false,
        error: validDto.error.message,
        data:emptyData
      }
   }
   
    safeData = fromDtoToModel(validDto.data)
    const savedData = await insertCustomer(safeData)
    if(!savedData || 'error' in savedData)
    {
        return{
            success:false,
            error:"erreur lors de l'insertion du client",
            data:emptyData
        }
    }
    return {
        success:true,
        error:"",
        data:savedData
    }
}

export async function Login(prevState:ActionResult|undefined,loginData:FormData)
{
    try{
        const rawLoginData:User = {
        username:String(loginData.get('username')),
        password:String(loginData.get('password')),
    }
    const validatedUserData = userSchema.safeParse(rawLoginData)
    if(validatedUserData.error || !validatedUserData.data)
    {
        throw new Error('nom d\'utilisateur et /ou mot de passe incorrect')
    }
    console.log('from file customerService.ts')
    console.log(`validate user data ${validatedUserData.data}`)
    const {username,password} = validatedUserData.data
    const response = await loginUser(username,password)
    if(!response ||response.error)
    {
        throw new Error("erreur lors du processus d'authentification !")
    }
     const dataSession:SessionData=
     {
        username:response.username,
        isAdmin:response.isAdmin,
     }
    await createSession(dataSession)
    

    return {success:true}
    }
    catch(error:unknown)
    {
        if(error instanceof Error)
        return{
            success:false,
            error:`erreur de serveur ${error.message}`
        }
        if(error instanceof String)
        {
            return {
                success:false,
                error:`erreur de serveur ${error.at(0)} `
            }
        }
    }
    
}

export async function handleGetUserByUUID(prevState:ActionResponse|null,formData:FormData):Promise<ActionResponse>
{
    try{

        const uuid = String(formData.get('customerID'))
        if(!uuid)
        {
            return {
                success:false,
                error:"identifiant utilisateurs invalide",
                data:{
                    firstname:"",
                    lastname:"",
                    email:"",
                    job:"",
                    phoneNumber:"",
                    accountNumber:0,
                    accountType:"",
                    amount:0,
                    customerID:''
                }
            }
        }
        const response = await getCustomerByUUID(uuid)
        if(!response)
        {
            return {
                success:false,
                error:"utilisateur introuvable",
                data:{
                    firstname:"",
                    lastname:"",
                    email:"",
                    job:"",
                    phoneNumber:"",
                    accountNumber:0,
                    accountType:"",
                    amount:0,
                    customerID:''
                }
            }
        }
        await createCustomerSession({customerID:uuid})

        const data = response
        console.log(typeof data)
        if(!data || 'error' in data )
        {
            return{
                success:false,
                error:`erreur : ${data.error}` || 'erreur lors du chargement des donnees !',
                data:{
                    firstname:"",
                    lastname:"",
                    email:"",
                    job:"",
                    phoneNumber:"",
                    accountNumber:0,
                    accountType:"",
                    amount:0,
                    customerID:''
                }
            }
        }
        console.log(data)
          
          const customer:Customer = {
            firstname: data.at(0)?.firstname,
            lastname: data.at(0)?.lastname,
            email: data.at(0)?.email,
            job: data.at(0)?.job,
            accountType: data.at(0)?.accountType,
            accountNumber: data.at(0)?.accountNumber,
            phoneNumber: data.at(0)?.phoneNumber,
            amount: data.at(0)?.amount,
            customerID: data.at(0)?.customerID
        }
         return {
            success:true,
            error:"",
            data:customer,
        }      
       
    }
    catch(error)
    {
        if(error instanceof Error)
        {
            return {
                success:false,
                error:`erreur de serveur ${error.message}`,
                data:{
                    firstname:"",
                    lastname:"",
                    email:"",
                    job:"",
                    phoneNumber:"",
                    accountNumber:0,
                    accountType:"",
                    amount:0,
                    customerID:''
                }
            }
        }
        if(typeof error === "string")
        {
            return {
                success:false,
                error:`erreur de serveur ${error.at(0)} `,
                data:{
                    firstname:"",
                    lastname:"",
                    email:"",
                    job:"",
                    phoneNumber:"",
                    accountNumber:0,
                    accountType:"",
                    amount:0,
                    customerID:''
                }
            }
        }
    }
        return  {
      success: false,
      error: 'erreur inconnue',
      data: {
        firstname: "",
        lastname: "",
        email: "",
        job: "",
        phoneNumber: "",
        accountNumber: 0,
        accountType: "",
        amount: 0,
        customerID: ''
      }
    }

}
export async function handleLogout()
{
    await deleteSession()
    redirect('/admin')
}
 
export async function handleUpdateCustomerData (prevState:ActionResponse|null,formData:FormData):Promise<ActionResponse>
{
    
    const customer:Partial<Customer>={
        firstname: formData.get('firstname')?String(formData.get('firstname')):undefined,
        lastname: formData.get('lastname')?String(formData.get('lastname')):undefined,
        job: formData.get('job')?String(formData.get('job')):undefined,
        phoneNumber: formData.get('phoneNumber')?String(formData.get('phone')):undefined,
        accountType: formData.get('accountType')?String(formData.get('accountType')):undefined,
        accountNumber: formData.get('accountNumber')?Number(formData.get('accountNumber')):undefined,
        amount: formData.get('amount')?Number(formData.get('amount')):undefined
    }
    const email = String(formData.get('email'))
    const updatedCustomer = await updateCustomer(email,customer)
    console.log(updatedCustomer)
    if(!updatedCustomer || 'error' in updatedCustomer)
    {
        return {
            success:false,
            error: "erreur lors de la mise a jor des utilisateurs !",
            data:emptyData
        }
    }

    return {
        success:true,
        error:"",
        data:updatedCustomer
    }
}
export async function handleUpdateCustomerAccountType(prevState:UpdateAccountResult|null,formData:FormData)
{
    try{
        const accountData = formData.get('accountType')
    if(!accountData)
    {
        return {
            success:false,
            error:"type de compte manquant"
        }
    }
    const email = String(formData.get('email'))
    if(!email)
    {
        return {
            success:false,
            error:"email du client manquant"
        }
    }
    const accountType = String(formData.get('accountType'))
    const updatedAccountType = updateCustomerAccountType(email,accountType)
    return {
        success:true,
        data:updatedAccountType
    }
    } catch (error:unknown) {
        if (error instanceof Error) {
            return {
                success:false,
                error:error.message
            }
        } else {
            return {
                success:false,
                error:String(error)
            }
        }
    }

} 

export async function handleUpdateCustomerAmount(
  prevState: UpdateAmountResult | undefined,
  formData: FormData
): Promise<UpdateAmountResult> {
  try {
    const amount = Number(formData.get('amount'));
    const email = String(formData.get('email'));

    // Validation email
    if (!email || email.trim() === '') {
      return {
        success: false,
        error: "Email invalide",
      };
    }

    // Validation montant (permet 0, mais pas NaN ou valeurs négatives)
    if (isNaN(amount)) {
      return {
        success: false,
        error: "Montant invalide",
      };
    }

    if (amount < 0) {
      return {
        success: false,
        error: "Le montant ne peut pas être négatif",
      };
    }

    // Mise à jour du montant
    const updatedAmount = await updateCustomerAmount(email, amount);

    if (!updatedAmount || 'error' in updatedAmount) {
      return {
        success: false,
        error: "Erreur lors de la mise à jour du montant"
      };
    }

    return {
      success: true,
      error: ""
    };

  } catch (error) {
    console.error('Erreur lors de la mise à jour:', error);

    let errorMessage = "Erreur de serveur inconnue";

    if (typeof error === "string") {
      errorMessage = `Erreur de serveur: ${error}`;
    } else if (error instanceof Error) {
      errorMessage = `Erreur de serveur: ${error.message}`;
    }

    return {
      success: false,
      error: errorMessage
    };
  }
}

export async function handleCustomerDeletion(email:string)
{
    if(!email)
    {
        throw new Error('email du client manquant')
    }
    return await deleteCustomerByEmail(email)
}

export async function handleGetCustomerByID(customerID:string)
{   
    
    if(!customerID)
    {
        throw new Error('ID du client manquant')
    }
    const customer = await getCustomerByID(customerID)
    if(!customer)
    {
        throw new Error('client introuvable')
    }
    return customer
} 
export async function handleGetCustomerByEmail(email:string)
{
    if(!email)
    {
        throw new Error('email du client manquant')
    }
    const customer = await getCustomerByEmail(email)
    if(!customer)
    {
        throw new Error('client introuvable')
    }
    return customer
} 

export async function handleGetAllCustomers()
{
    const customers = await getAllCustomer()
    if(customers.error || !customers )
    {
       throw new Error( customers.error)
    }
    return customers.data
}

// Action pour récupérer l'utilisateur courant
export async function getCurrentUser() {
  return await getSession();
}