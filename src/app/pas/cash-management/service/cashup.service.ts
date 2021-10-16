import { Injectable } from '@angular/core';
import All_Cashup from '../model/all-cashup.model';

@Injectable({
  providedIn: 'root',
})
export class CashupService {

  cashup_data: All_Cashup[] =  [
    {   
    id:1231,
    DATE: new Date(2021,3,4),
    TIME:"AM",
    EPOS:7 ,
    CASH: 7,
    PDQ: 7,
    DELIVERY: 7,
    DIFFERENCE:-7,
   KPI_TOTAL:21,
    VOID: 7,
    DISCOUNT: 7,
    REFUNDS: 7,
    STATUS:"Draft",
},
{   
  id:1232,
  DATE: new Date(2021,3,12),
  TIME:"PM",
  EPOS:6,
  CASH: 6,
  PDQ: 6,
  DELIVERY: 6,
  DIFFERENCE:-6,
 KPI_TOTAL:18,
  VOID: 6,
  DISCOUNT: 6,
  REFUNDS: 6,
  STATUS:"Published",
},
{   
  id:1233,
  DATE: new Date(2021,3,14),
  TIME:"AM",
  EPOS:8,
  CASH: 8,
  PDQ: 8,
  DELIVERY: 8,
  DIFFERENCE:-8,
 KPI_TOTAL:24,
  VOID: 8,
  DISCOUNT: 8,
  REFUNDS: 8,
  STATUS:"Draft",
},
{   
  id:1234,
  DATE: new Date(2021,3,16),
  TIME:"PM",
  EPOS:5,
  CASH: 5,
  PDQ: 5,
  DELIVERY: 5,
  DIFFERENCE:-5,
 KPI_TOTAL:15,
  VOID: 5,
  DISCOUNT: 5,
  REFUNDS: 5,
  STATUS:"Published",
},
]
  constructor() { }

  getAllCashup(){
    return this.cashup_data;
  }

  getCashupById(id: number){
    return this.cashup_data.find(x=> x.id==id);
  }

  deleteCashupById(id: number){
    this.cashup_data = this.cashup_data.filter(x=> x.id != id);
  }

}
