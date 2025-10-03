import * as z from 'zod';
import { Customer, CustomerDTO } from '../asset/definitions';
import { generateCustomerID } from '../asset/data';

 export const customerSchema = z.object({
    firstname: z.string().max(100).min(3),
    lastname: z.string().max(100).min(3),
    email: z.email({pattern:z.regexes.html5Email}),
    job: z.string(),
    accountType: z.string(),
    accountNumber:z.number(),
    phoneNumber: z.string().regex(/[0-9]{15}/),
    amount: z.number()
})

export const userSchema = z.object({
    username: z.string({error:"veuillez entrer un nom d'utilisateur valide !"}).max(100).min(3),
    password: z.string().regex(/[a-z0-9]/i,{error:"nom d'utilisateur et /ou mot de passe incorrect"}),
})

export const fromDtoToModel = (data:CustomerDTO)=>{

    const customer:Customer={
        firstname:data.firstname,
        lastname:data.lastname,
        email:data.email,
        job:data.job,
        accountNumber:data.accountNumber,
        accountType:data.accountType,
        phoneNumber:data.phoneNumber,
        amount: data.amount,
        customerID:generateCustomerID()
    }
    return customer
}