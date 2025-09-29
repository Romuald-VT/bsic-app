import sql from "../../app/db";
import { Customer } from "../asset/definitions";


export async function getAllCustomer(occurences:number,page:number)
{
    try {
        const data = await sql`SELECT * FROM customers`
        const nbPage = Math.round(data.length/occurences)
        const result = data.slice((page-1)*occurences,occurences*page)
        return {result,nbPage}
    } catch (error) {
        
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error(String(error));
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
    const result = await sql`INSERT INTO customers (firstname, lastname, email, job, accountType, accountNumber, phoneNumber, amount, customerID)
    VALUES (${customer.firstname}, ${customer.lastname}, ${customer.email}, ${customer.job}, ${customer.accountType}, ${customer.accountNumber}, ${customer.phoneNumber}, ${customer.amount}, ${customer.customerID})
    ON CONFLICT (email) DO NOTHING
    RETURNING TRUE`
    return result[0] as Customer | undefined
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
    RETURNING TRUE`
    return result[0] as Customer | undefined
    } catch (error) {
        
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error(String(error));
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
            throw new Error(error.message);
        } else {
            throw new Error(String(error));
        }
    }
}

export async function updateCustomerAmount(email:string,amount:number)
{
    try {
        const result = await sql`UPDATE customers SET amount=${amount} WHERE email=${email}`
        return result
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error(String(error));
        }
    }
}

export async function deleteCustomerByEmail(email:string)
{
    const result = await sql`DELETE FROM customers WHERE email=${email} RETURNING TRUE`
    return result[0] as Customer | undefined
}