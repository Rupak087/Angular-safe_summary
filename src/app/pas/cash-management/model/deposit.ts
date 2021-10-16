export default class Deposit{
    id:number;
    employee: string;
    transaction_date:Date;
    witness:string;
    safe_float: number;
    till_float: number;
    sales_cash: number;
   
}

export class Banking{
    id: number;
    sheet_date: Date;
    giro_slip: number;
    banking_total: number;
    outstanding: number;
    sealed_by: string;
    
}