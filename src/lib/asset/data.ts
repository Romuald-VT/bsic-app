import bcrypt from 'bcrypt'
import { User } from './definitions';

export const generateCustomerID=():string=>{
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let customerID = '';
    for (let i = 0; i < 10; i++) {
        customerID += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return customerID;
}

export const data = [
    {
        firstname: "John",
        lastname: "Doe",
        email: "johndoe@gmail.com",
        job: "Software Engineer",
        accountType: "Savings",
        accountNumber: 1234567890123456,
        phoneNumber: "123-456-7890",
        amount: 5000,
        customerID: generateCustomerID()
    },
    {
        firstname: "Jane",
        lastname: "Smith",
        email: "janesmith@gmail.com",
        job: "Product Manager",
        accountType: "Checking",
        accountNumber: 2345678901234567,
        phoneNumber: "234-567-8901",
        amount:20000,
        customerID: generateCustomerID()
    },
    {
        firstname: "Alice",
        lastname: "Johnson",
        email: "alicejohnson@gmail.com",
        job: "Designer",
        accountType: "Savings",
        accountNumber: 3456789012345678,
        phoneNumber: "345-678-9012",
        amount: 100000,
        customerID: generateCustomerID()
    },
    {
        firstname: "Thomas",
        lastname: "Shelby",
        email: "tomyshelby@gmail.com",
        job: "Gangster",
        accountType: "Checking",
        accountNumber: 3456789112345678,
        phoneNumber: "347-608-9362",
        amount:45000,
        customerID: generateCustomerID()
    },
    {
        firstname: "Esmeralda",
        lastname: "Lee",
        email: "esmeraldalee@gmail.com",
        job: "Housewife",
        accountType: "Checking",
        accountNumber: 3456789012378678,
        phoneNumber: "380-655-8702",
        amount:70000,
        customerID: generateCustomerID()
    },
    {
        firstname: "Charlie",
        lastname: "Strong",
        email: "charliestrong@gmail.com",
        job: "Docker",
        accountType: "Savings",
        accountNumber: 3456774112345678,
        phoneNumber: "345-600-9012",
        amount:78000,
        customerID: generateCustomerID()
    },
]

export const salt = await bcrypt.genSalt(10)

export const bsicAdmin:User = {
    username:'bsic-admin',
    email:'romualdtchatcho@gmail.com',
    password:'bsicadmin0000',
    isAdmin:true
}