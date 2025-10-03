"use server"

import { redirect } from "next/navigation";
import { ActionResult, Customer, CustomerDTO, User } from "../asset/definitions";
import { createSession, deleteSession, getSession, SessionData } from "../auth";
import { insertCustomer,updateCustomer,updateCustomerAccountType,updateCustomerAmount,
    deleteCustomerByEmail,getCustomerByID,getCustomerByEmail,getAllCustomer, 
    loginUser} from "../repository/customerRepository";
import { customerSchema, fromDtoToModel, userSchema } from "../validation/validators";
import { success } from "zod";

export async function handleCustomerForm(customerData:FormData)
{
    if(!customerData.get('firstname') ||!customerData.get('lastname')||!customerData.get('email')||!customerData.get('job')||!customerData.get('phoneNumber')
    ||!customerData.get('accountType')||!customerData.get('accountNumber')||!customerData.get('amount'))
{
    throw new Error("donnees de formulaire manquante !")
}
   
   let safeData = null
   const customer:CustomerDTO ={
     firstname:String(customerData.get('firstname')),
     lastname:String(customerData.get('lastname')),
     email:String(customerData.get('email')),
     job: String(customerData.get('job')),
     phoneNumber:String(customerData.get('phoneNumber')),
     accountNumber:Number(customerData.get('accountNumber')),
     accountType:String(customerData.get('accountType')),
     amount:Number(customerData.get('amount'))
   }

   const validDto = await customerSchema.safeParse(customer)
   
   if(validDto.error || !validDto.data)
   {
      throw new Error('donnees de formulaire invalide !')
   }
   
    safeData = fromDtoToModel(validDto.data)
    const savedData = insertCustomer(safeData)
    return savedData
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
    console.log(`response: ${response?.username}  in customerService.ts`)
    if(!response ||response.error)
    {
        throw new Error("erreur d'authentification !")
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
export async function handleLogout()
{
    await deleteSession()
    redirect('/admin')
}

export async function handleUpdateCustomerData (formData:FormData,email:string)
{
    if(!email)
    {
        throw new Error("email du client manquant")
    }
    const customer:Partial<Customer> ={
        firstname: formData.get('firstname')?String(formData.get('firstname')):undefined,
        lastname: formData.get('lastname')?String(formData.get('lastname')):undefined,
        job: formData.get('job')?String(formData.get('job')):undefined,
        phoneNumber: formData.get('phoneNumber')?String(formData.get('phoneNumber')):undefined,
        accountType: formData.get('accountType')?String(formData.get('accountType')):undefined,
        accountNumber: formData.get('accountNumber')?Number(formData.get('accountNumber')):undefined,
        amount: formData.get('amount')?Number(formData.get('amount')):undefined
    }
    const updatedCustomer = updateCustomer(email,customer)
    return updatedCustomer  
}
export async function handleUpdateCustomerAccountType(formData:FormData,email:string)
{
    if(!email)
    {
        throw new Error("email du client manquant")
    }
    if(!formData.get('accountType'))
    {
        throw new Error("type de compte manquant")
    }
    const accountType = String(formData.get('accountType'))
    const updatedAccountType = updateCustomerAccountType(email,accountType)
    return updatedAccountType
} 

export async function handleUpdateCustomerAmount(formData:FormData,email:string)
{
    if(!email)
    {
        throw new Error("email du client manquant")
    }
    if(!formData.get('amount'))
    {
        throw new Error("montant manquant")
    }
    const amount = Number(formData.get('amount'))
    const updatedAmount = updateCustomerAmount(email,amount)
    return updatedAmount
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