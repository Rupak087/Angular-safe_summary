import { Component, OnInit } from '@angular/core';
import { SafeSummary, Transaction, AddTransaction } from '../model/safeSummary.model';
import { DepositService } from '../service/deposit.service';
import { SafeSummaryService } from '../service/safe-summary.service';

@Component({
  selector: 'ngx-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss'],
})
export class DepositComponent implements OnInit {
  
  SafeSummaryValue: SafeSummary[] = [] ;
  TransactionValue: Transaction[] =[];
  AddTransactionValue: AddTransaction[] =[];
  constructor(private depositService: DepositService,private safesummaryService:SafeSummaryService) { 
    this.prevDate.setDate(this.myDate.getDate()-1) ;
  }

  myDate = new Date();
  prevDate = new Date();
  deposits_filter = "M";
  allDeposit ;
  allBanking;

  ngOnInit(): void {
    this.safesummaryService.getSafeSummary()
    .subscribe((data) => {
      this.SafeSummaryValue = Object.assign([], data);
      console.log("Safe summary is updated");
      console.log(this.SafeSummaryValue);
    });

    this.safesummaryService.getTransaction()
    .subscribe((data) => {
      this.TransactionValue = Object.assign([], data);
      console.log("Transaction Value is updated");
      console.log(this.TransactionValue);
    });

    this.safesummaryService.addSafeSummary()
    .subscribe((data) => {
      this.AddTransactionValue = Object.assign([], data);
      console.log("New Transaction Value is updated");
      console.log(this.AddTransactionValue);
    });
  }

  reset_deposits(s:string){
    this.deposits_filter = s;
  }

}
