import { updateCustomerAmount } from "@/lib/repository/customerRepository";
import { NextResponse } from "next/server";


export async function GET()
{
    const customers = await updateCustomerAmount('haberamagold@yahoo.co.uk',5300000)
    return NextResponse.json(customers)
}