import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import { Customer } from "@/lib/asset/definitions";
import sql from "../db";
import { bsicAdmin, data, salt } from "@/lib/asset/data";


const seedCustomers = async()=>{
     
    await sql`
    CREATE TABLE IF NOT EXISTS customers (
        id SERIAL PRIMARY KEY,
        firstname VARCHAR(100) NOT NULL,
        lastname VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        job VARCHAR(100) NOT NULL,
        accountType VARCHAR(50) NOT NULL,
        accountNumber BIGINT NOT NULL UNIQUE,
        phoneNumber VARCHAR(15) NOT NULL,
        amount INT NOT NULL,
        customerID VARCHAR(10) NOT NULL UNIQUE
    )`
    //preremplir les tables customers et users
    const insertedCustomers = await Promise.all(
        data.map(async (customer)=>{
            return sql`INSERT INTO customers (firstname, lastname, email, job, accountType, accountNumber, phoneNumber, amount, customerID)
            VALUES (${customer.firstname}, ${customer.lastname}, ${customer.email}, ${customer.job},
             ${customer.accountType}, ${customer.accountNumber}, ${customer.phoneNumber}, 
             ${customer.amount}, ${customer.customerID})
            ON CONFLICT (email) DO NOTHING
            RETURNING firstname,lastname`
        })
    )
    return insertedCustomers
}

const seedAdmin = async()=>{
    
      await sql`
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(100) NOT NULL,
        isAdmin BOOLEAN DEFAULT FALSE
    )`
    

    const hashPassword = await bcrypt.hash(bsicAdmin.password, salt);
    const insertedAdmin = await sql`
        INSERT INTO users (username, email, password, isAdmin)
        VALUES (${bsicAdmin.username}, ${bsicAdmin.email}, ${hashPassword}, true)
        ON CONFLICT (email) DO NOTHING
        RETURNING username, email
    `;
    return insertedAdmin
}

export async function GET(){
    
    try {
        
        const result = await sql.begin(() => [seedCustomers(), seedAdmin()])
        return NextResponse.json({message:'Database seeded successfully', result}, {status:200})
    } catch (error) {
        return NextResponse.json({message:'Error seeding database', error}, {status:500})
    }
}