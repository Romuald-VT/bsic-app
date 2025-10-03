import { getAllCustomer } from "@/lib/repository/customerRepository";
import { NextResponse } from "next/server";

export async function GET()
{
   const data = getAllCustomer()
   return NextResponse.json(data)
}