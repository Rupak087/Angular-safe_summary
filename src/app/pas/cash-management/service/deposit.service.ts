import { Injectable } from '@angular/core';
import { doesNotReject } from 'node:assert';
import Deposit, { Banking } from '../model/deposit';


@Injectable({
  providedIn: 'root'
})
export class DepositService {

  data1 : any ;

  deposits: Deposit[] = [
      {   
          id:1231,
          employee: "Alex Doe",
          transaction_date: new Date(2021,11,1),
          witness:"Jenny Path",
          safe_float: 1000,
          till_float: 200,
          sales_cash: 1000,
        
      },
      {   
        id:1232,
        employee: "Jenny Path",
        transaction_date: new Date(2021,15,5),
        witness:"Alex Doe",
        safe_float: 2000,
        till_float: 200,
        sales_cash: 2000,
      
    },
    {   
      id:1233,
      employee: "John Doe",
      transaction_date: new Date(2021,12,2),
      witness:"Cain Brock",
      safe_float: 2500,
      till_float: 250,
      sales_cash: 2500,
    
  },
  {   
    id:1234,
    employee: "Cain Brock",
    transaction_date: new Date(2021,19,10),
    witness:"John Doe",
    safe_float: 500,
    till_float: 500,
    sales_cash: 500,
  
}, {   
  id:1235,
  employee: "Colin Harpin",
  transaction_date: new Date(2021,29,5),
  witness:"David Haim",
  safe_float: 1000,
  till_float: 100,
  sales_cash: 1000,

},
 
   ]

   bankings: any[]= [
    { 
      id: 1231, 
      sheet_date: new Date(2020,12,1),
      cashup_sheets: [
          {   
          id:1231,
          sheet_date: new Date(2020,11,1),
          epos_taking:8,
          cash_taking: 7,
          pdq: 7.53798,
          delivery: 7,
          Void: 7,
          discount: 7,
          refunds: 7,
          difference:-7,
          isChecked:false
      },
      {   
          id:1232,
          sheet_date: new Date(2020,12,2),
          epos_taking:6,
          cash_taking: 7,
          pdq: 7,
          delivery: 7,
          Void: 7,
          discount: 7,
          refunds: 7,
          difference:7,
          isChecked:false
      },
      ],
      giro_slip: 45671,
      banking_total: 200,
      banked_total: 180,
      outstanding: 120,
      sealed_by: "John Doe",
      reason: "Cash Difference"
    },
    { 
      id: 1232,
      sheet_date: new Date(2020,12,1),
      cashup_sheets: [
          {   
          id:1231,
          sheet_date: new Date(2020,11,1),
          epos_taking:8,
          cash_taking: 7,
          pdq: 7.53798,
          delivery: 7,
          Void: 7,
          discount: 7,
          refunds: 7,
          difference:-7,
          isChecked:false
      },
      {   
          id:1232,
          sheet_date: new Date(2020,12,2),
          epos_taking:6,
          cash_taking: 7,
          pdq: 7,
          delivery: 7,
          Void: 7,
          discount: 7,
          refunds: 7,
          difference:7,
          isChecked:false
      },
      ],
      giro_slip: 45672,
      banking_total: 200,
      banked_total: 180,
      outstanding: -120,
      sealed_by: "John Doe",
      reason: "Cash Difference"
    },
    { 
      id: 1233,
      sheet_date: new Date(2020,12,1),
      cashup_sheets: [
          {   
          id:1231,
          sheet_date: new Date(2020,11,1),
          epos_taking:8,
          cash_taking: 7,
          pdq: 7.53798,
          delivery: 7,
          Void: 7,
          discount: 7,
          refunds: 7,
          difference:-7,
          isChecked:false
      },
      {   
          id:1232,
          sheet_date: new Date(2020,12,2),
          epos_taking:6,
          cash_taking: 7,
          pdq: 7,
          delivery: 7,
          Void: 7,
          discount: 7,
          refunds: 7,
          difference:7,
          isChecked:false
      },
      ],
      giro_slip: 45673,
      banking_total: 200,
      banked_total: 180,
      
      outstanding: 100,
      sealed_by: "John Doe",
      reason: "Cash Difference"
    },
    { 
      id: 1234,
      sheet_date: new Date(2020,12,1),
      cashup_sheets: [
          {   
          id:1231,
          sheet_date: new Date(2020,11,1),
          epos_taking:8,
          cash_taking: 7,
          pdq: 7.53798,
          delivery: 7,
          Void: 7,
          discount: 7,
          refunds: 7,
          difference:-7,
          isChecked:false
      },
      {   
          id:1232,
          sheet_date: new Date(2020,12,2),
          epos_taking:6,
          cash_taking: 7,
          pdq: 7,
          delivery: 7,
          Void: 7,
          discount: 7,
          refunds: 7,
          difference:7,
          isChecked:false
      },
      ],
      giro_slip: 45674,
      banking_total: 200,
      banked_total: 180,
      outstanding: -120,
      sealed_by: "John Doe",
      reason: "Cash Difference"
    },
    { 
      id: 1235,
      sheet_date: new Date(2020,12,1),
      cashup_sheets: [
          {   
          id:1231,
          sheet_date: new Date(2020,11,1),
          epos_taking:8,
          cash_taking: 7,
          pdq: 7.53798,
          delivery: 7,
          Void: 7,
          discount: 7,
          refunds: 7,
          difference:-7,
          isChecked:false
      },
      {   
          id:1232,
          sheet_date: new Date(2020,12,2),
          epos_taking:6,
          cash_taking: 7,
          pdq: 7,
          delivery: 7,
          Void: 7,
          discount: 7,
          refunds: 7,
          difference:7,
          isChecked:false
      },
      ],
      giro_slip: 45675,
      banking_total: 200,
      banked_total: 180,
      outstanding: -60,
      sealed_by: "John Doe",
      reason: ""
    },
    { 
      id: 1236,
      sheet_date: new Date(2020,12,1),
      cashup_sheets: [
          {   
          id:1231,
          sheet_date: new Date(2020,11,1),
          epos_taking:8,
          cash_taking: 7,
          pdq: 7.53798,
          delivery: 7,
          Void: 7,
          discount: 7,
          refunds: 7,
          difference:-7,
          isChecked:false
      },
      {   
          id:1232,
          sheet_date: new Date(2020,12,2),
          epos_taking:6,
          cash_taking: 7,
          pdq: 7,
          delivery: 7,
          Void: 7,
          discount: 7,
          refunds: 7,
          difference:7,
          isChecked:false
      },
      ],
      giro_slip: 45676,
      banking_total: 200,
      banked_total: 180,
      outstanding: 80,
      sealed_by: "John Doe",
      reason: ""
    },
    { 
      id: 1237,
      sheet_date: new Date(2020,12,1),
      cashup_sheets: [
          {   
          id:1231,
          sheet_date: new Date(2020,11,1),
          epos_taking:8,
          cash_taking: 7,
          pdq: 7.53798,
          delivery: 7,
          Void: 7,
          discount: 7,
          refunds: 7,
          difference:-7,
          isChecked:false
      },
      {   
          id:1232,
          sheet_date: new Date(2020,12,2),
          epos_taking:6,
          cash_taking: 7,
          pdq: 7,
          delivery: 7,
          Void: 7,
          discount: 7,
          refunds: 7,
          difference:7,
          isChecked:false
      },
      ],
      giro_slip: 45677,
      banking_total: 200,
      banked_total: 180,
      outstanding: 100,
      sealed_by: "John Doe",
      reason: "Cash Difference"
    },
  ]

  constructor() { }

  getAllDeposits(){
    return this.deposits;
  }

  getDepositById(id: number){
    return this.deposits.find(x=> x.id==id);
  }

  getAllBankings(){
    return this.bankings;
  }

  getBankingById(id: number){
    return this.bankings.find(x=> x.id==id);
  }

  deleteBankingById(id: number){
    this.bankings = this.bankings.filter(x=> x.id != id);
  }
}
