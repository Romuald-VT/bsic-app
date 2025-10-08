import sql from "../../app/db";
import bcrypt from 'bcrypt';
import { Customer } from "../asset/definitions";

// ✅ VERSION CORRIGÉE
export async function getAllCustomer() {
  try {
    const data = await sql`SELECT * FROM customers`;
    
    // Vérifier si data existe et a des rows
    if (!data) {
      return { 
        success: false, 
        error: "Aucun client trouvé",
        data: [] 
      };
    }
    
    return { 
      success: true, 
      data: data
    };
    
  } catch (error) {
    if(error instanceof AggregateError) {
    console.error('Erreur lors de la récupération des clients:',error.message);
    }
    if(error instanceof String) {
        console.error('Erreur inconnue lors de la récupération des clients:', error.at(0));
    }
    return { 
      success: false, 
      error: 'Erreur serveur Reseau Instable !',
      data: [] 
    };
  }
}

export async function getCustomerByUUID(uuid:string)
{
    try{
        const data =await  sql`SELECT * FROM customers WHERE customerid=${uuid}`
        return data
    }
    catch(error)
    {
        if(error instanceof Error)
        {
            return {error:error.message}
        }
        if(error instanceof String)
        {
            return {error:error}
        }
    }
}

export async function loginUser(username:string,password:string)
{
    if(!username || !password)
    {
        throw new Error("veuillez entre un nom d'utilisateur et /ou un mot de passe valide !")
    }
    try{
    const user = await sql`SELECT * FROM users WHERE username=${username}`
    if(!user)
    {
        return {error:"utilisateur incorrect"}
    }
    const isSamePassword = await bcrypt.compare(password,user.at(0)?.password || '',)
    if(!isSamePassword)
    {
        return {error:"nom d'utilisateur et /ou mot de passe incorrect"}
    }
    return {username:user[0].username,isAdmin:user[0].isAdmin}
    }
    catch(error)
    {
        if(error instanceof Error)
        {
            return {error:error}
        }
    }
}

export async function getCustomerByEmail(email:string)
{
    const result = await sql`SELECT * FROM customers WHERE email=${email}`
    return result[0] as Customer | undefined
}

export async function getCustomerByID(customerID:string)
{
    try{
       const customer = await sql`SELECT * from customers WHERE customerID=${customerID}`
      return customer
    }
    catch(error)
    {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error(String(error));
        }
    }
}
    
export async function insertCustomer(customer:Customer)
{
    try{
    const result = await sql`INSERT INTO customers (firstname, lastname, email, job, accountType, accountNumber, phoneNumber, amount, customerID)
    VALUES (${customer.firstname}, ${customer.lastname}, ${customer.email}, ${customer.job}, ${customer.accountType}, ${customer.accountNumber}, ${customer.phoneNumber}, ${customer.amount}, ${customer.customerID})
    ON CONFLICT (email) DO NOTHING
    RETURNING TRUE`
    return result[0] as Customer | undefined
    }
    catch(error)
    {
        if (error instanceof Error) {
            return {error:error.message}
        } else {
            return {error:error};
        }
    }
}

export async function updateCustomer(email:string, customer:Partial<Customer>)
{
    try {
        const result = await sql`UPDATE customers SET
        firstname = COALESCE(${customer.firstname ?? null}, firstname),
        lastname = COALESCE(${customer.lastname ?? null}, lastname),
        job = COALESCE(${customer.job ?? null}, job),
        accountType = COALESCE(${customer.accountType ?? null}, accountType),
        accountNumber = COALESCE(${customer.accountNumber ?? null}, accountNumber),
        phoneNumber = COALESCE(${customer.phoneNumber ?? null}, phoneNumber),
        amount = COALESCE(${customer.amount ?? null}, amount)
        WHERE email=${email}
        RETURNING *`
    return result[0] as Customer | undefined
    } catch (error) {
        
        if (error instanceof Error) {
            return {error: error.message}
        } else {
            return {error:error}
        }
    }
}

export async function updateCustomerAccountType(email:string, accountType:string)
{
    try{
        const result = await sql`UPDATE customers SET
        accountType = ${accountType}
        WHERE email=${email}
        RETURNING TRUE`
        return result[0]  
    }
    catch(error:unknown)
    {
        if (error instanceof Error) {
            return {error:error.message}
        } else {
            return {error:error};
        }
    }
}

export async function updateCustomerAmount(email:string,amount:number)
{
    try {
        const result = await sql`UPDATE customers SET amount=${amount} WHERE email=${email}`
        console.log(result)
        return result
    } catch (error) {
        if (error instanceof Error) {
            return {error:error.message}
        } else {
            return {error:error}
        }
    }
}

export async function deleteCustomerByEmail(email:string)
{
    try{
    const result = await sql`DELETE FROM customers WHERE email=${email} RETURNING TRUE`
    console.log(result)
    return result[0]
    }
    catch(error)
    {
        if(error instanceof Error)
        {
            return{error:error.message}
        }
    }
}
