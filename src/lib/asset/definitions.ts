export type Customer={
    firstname:string,
    lastname:string,
    email:string,
    job:string,
    accountType:string
    accountNumber:number,
    phoneNumber:string
    amount:number
    customerID:string
}

export type CustomerDTO={
    firstname:string,
    lastname:string,
    email:string,
    job:string,
    accountType:string
    accountNumber:number,
    phoneNumber:string
    amount:number
}

export type User ={
    username:string,
    password:string
}

export type CustomerFormData={
    firstname: string
    lastname: string
    email: string
    phone: string
    accountNumber: number
    amount: number
}
export type ActionResult = {
  success: boolean;
  error?: string;
  fieldErrors?: Record<string, string[]>;
} 

export type UserLogged={
    username:string,
    email:string
}

 export type UpdateAccountResult = {
  success: boolean;
  error?: string;
};

export type UpDateAmountResult = {
    success: boolean;
    error?: string;
    data:Customer
  };
export type ActionResponse = {
    success: boolean;
    error?: string;
    data?: Customer;
  };
