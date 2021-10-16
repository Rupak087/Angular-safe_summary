import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Deposit from '../../model/deposit';
import { DepositService } from '../../service/deposit.service';
import { SafeSummary, Transaction, AddTransaction } from '../../model/safeSummary.model';
import { SafeSummaryService } from '../../service/safe-summary.service';

@Component({
  selector: 'ngx-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss'],
})
export class PendingComponent implements OnInit {
  gridApi: any;
  gridColumnApi: any;
  editBankingObj;
  selectedDeposits: Deposit[] = [];
  TransactionValue: Transaction[] =[];
  AddTransactionValue: AddTransaction[] =[];

  constructor(
    private depositService: DepositService, 
    private datePipe: DatePipe,
    private dialogService: NbDialogService,
    private modalService: NgbModal,
    private fb:FormBuilder,
    private safesummaryService:SafeSummaryService
    ) {
   }

  allDeposit: Deposit[];
  safesummaryForm: FormGroup;


  ngOnInit(): void {
    this.allDeposit = this.depositService.getAllDeposits();

    this.safesummaryForm = this.fb.group({
      transaction_date: ['', Validators.required],
      safe_Float: ['', Validators.required],
      till_Float: ['', Validators.required],
      sales_cash: ['', Validators.required],
      witness: ['', Validators.required],
      mis_cash: ['', Validators.required],
    })

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

  defaultColDef = {
    flex: 1,
    minWidth: 100,
    resizable: true,
  };

  columnDefs = [
    { field: 'employee', headerName:'EMPLOYEE', sortable: true, checkboxSelection: true, filter: 'agTextColumnFilter',
      headerCheckboxSelection: true, headerCheckboxSelectionFilteredOnly: true,
      valueFormatter: params => this.dateFormatter(params.data.sheet_date)
    },
    { field: 'date',headerName:'DATE', sortable: true, filter: 'agTextColumnFilter',
      
    },
    { field: 'witness',headerName:'WITNESS', sortable: true, filter: 'agTextColumnFilter', 
    
    },
    { field: 'safeFloat',headerName:'SAFE FLOAT', sortable: true, filter: 'agTextColumnFilter',
      valueFormatter: params => this.currencyFormatter(params.data.epos_taking, '£')
    },
    { field: 'tillFloat',headerName:'TILL FLOAT', sortable: true, filter: 'agTextColumnFilter',
      valueFormatter: params => this.currencyFormatter(params.data.epos_taking, '£')
    },
    { field: 'salesCash',headerName:'SALES CASH', sortable: true, filter: 'agTextColumnFilter',
      valueFormatter: params => this.currencyFormatter(params.data.epos_taking, '£')
    },
 
  ];

  onGridReady(params) {
    this.allDeposit = this.depositService.getAllDeposits();

    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

  }

  currencyFormatter(currency, sign) {
    var sansDec = currency
    return sign + ` ${sansDec}`;
  }

  dateFormatter(date:Date){
    var formatted_date = this.datePipe.transform(date, 'dd MMM yyyy')
    return formatted_date;
  }

  @ViewChild('editContent') editContent: TemplateRef<any>;
  createSafeSummaryModal() {
   this.editBankingObj ;
   let selectedNodes = this.gridApi.getSelectedNodes();
   let selectedData = selectedNodes.map(node=> node.data);
   console.log(selectedData);
   this.selectedDeposits = selectedData;
  //  this.dialogService.open(this.editContent);
   this.modalService.open(this.editContent, { centered: true, backdrop:true,  windowClass: 'sidebar-modal', size: 'lg' });
 }

 toStr(s:any){
    return JSON.stringify(s);
 }

 submitSafeSummary(){
   this.safesummaryForm.value.cashup_sheets = this.selectedDeposits;
  console.log(this.safesummaryForm.value)
 }
 
}
