import { NextResponse } from "next/server";
import { Customer } from "@/lib/asset/definitions";
import { generateCustomerID } from "@/lib/asset/data";
import sql from "../db";
import { tr } from "zod/locales";

export async function GET()
{
    try {
    const customer = {
        firstname: "Johnny",
        lastname: "Doggs",
        email: "johnndogs@gmail.com",
        job: "Thief",
        accountType: "Savings",
        accountNumber: 1234753890123456,
        phoneNumber: "885-456-7890",
        amount: 150000,
        customerID: generateCustomerID()
    }

    const result = await sql`INSERT INTO customers (firstname, lastname, email, job, accountType, accountNumber, phoneNumber, amount, customerID)
    VALUES (${customer.firstname}, ${customer.lastname}, ${customer.email}, ${customer.job}, ${customer.accountType}, ${customer.accountNumber}, ${customer.phoneNumber}, ${customer.amount}, ${customer.customerID})
    ON CONFLICT (email) DO NOTHING
    RETURNING TRUE`
    return NextResponse.json({result})
    } catch (error) {
        return NextResponse.json({error})
    }
}