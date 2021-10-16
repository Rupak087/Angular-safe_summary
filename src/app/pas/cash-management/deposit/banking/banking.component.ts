import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import Deposit, { Banking } from '../../model/deposit';
import { DepositService } from '../../service/deposit.service';
import { NbDialogService  } from '@nebular/theme';
import { BankingActionCellRendererComponent } from './banking-action-cell-renderer/banking-action-cell-renderer.component';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, FormBuilder  } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss'],
})
export class BankingComponent implements OnInit,AfterViewInit {

  gridApi: any;
  gridColumnApi: any;
  viewBankingObj;
  editBankingObj;
  deleteBankingObj;
  
  constructor(private depositService: DepositService, 
            private dialogService: NbDialogService,
            private datePipe: DatePipe,
            private modalService: NgbModal) {
              
  }

  editForm;

 downloadOptions : boolean = false ;
 allBanking;
 allDeposit;
 selectedDeposits: Deposit[] = [];

 ngOnInit(): void {
   this.refreshBankingData();
 }

 refreshBankingData(){
   this.allBanking = this.depositService.getAllBankings();
   this.allDeposit = this.depositService.getAllDeposits();
 }

  ngAfterViewInit() {
   
 }

 gridOptions = {
  context: {
    componentParent: this
  }
 }
 defaultColDef = {
   flex: 1,
   minWidth: 180,
   resizable: true,
 };

 columnDefs = [
   { field: 'sheet_date', headerName:'BANKED DATE', sortable: true, checkboxSelection: true,
      headerCheckboxSelection: true, headerCheckboxSelectionFilteredOnly: true,
      valueFormatter: params => this.dateFormatter(params.data.sheet_date)
  },
   { field: 'giro_slip',headerName:'GIRO SLIP NUMBER', sortable: true,filter: 'agTextColumnFilter'
  },
   { field: 'banking_total',headerName:'BANKING TOTAL', sortable: true, filter: 'agTextColumnFilter', 
   valueFormatter:params =>this.currencyFormatter(params.data.banking_total, '£')
  },
  { field: 'outstanding',headerName:'OUTSTANDING', sortable: true, filter: 'agTextColumnFilter',
  valueFormatter: params => this.currencyFormatter1(params.data.outstanding, '£'),
  cellStyle: params => {
  if (params.value < 0) {
      return {color: 'red', };
  }
  else if(params.value == 0){
    return{color:'black'};
  }
  return {color: 'green'};
  } },
   { field: 'sealed_by',headerName:'SEALED BY', sortable: true },
  
   { headerName: 'Actions',
     cellRendererFramework: BankingActionCellRendererComponent,
   }
 ];

 onGridReady(params) {
  this.allBanking = this.depositService.getAllBankings();
  this.gridApi = params.api;
  this.gridColumnApi = params.columnApi;

}

currencyFormatter(currency, sign) {
  var sansDec = currency
  return sign + ` ${sansDec}`;
}
currencyFormatter1(currency, sign) {
  var sansDec = currency
  if(sansDec < 0){
    var d = sansDec * (-1);
    return '- '+sign+' '+`${d}`;
  }
  if(sansDec == 0){
    return sign+' '+`${sansDec}`;
  }
  return '+ '+sign+' '+`${sansDec}`;
}

dateFormatter(date:Date){
  var formatted_date = this.datePipe.transform(date, 'dd MMM yyyy')
  return formatted_date;
}



toStr(s:any){
  return JSON.stringify(s);
}


 @ViewChild('editContent') editContent: TemplateRef<any>;
 editBanking(row) {
  this.editBankingObj = row;
  this.selectedDeposits = row.cashup_sheets || [];
  // this.dialogService.open(this.editContent);
  this.modalService.open(this.editContent, { centered: true, backdrop:true,  windowClass: 'sidebar-modal', size: 'lg' });

  this.editForm = new FormGroup({
    sheet_date: new FormControl(this.dateFormatter(this.editBankingObj.sheet_date)),
    giro_slip: new FormControl(this.editBankingObj.giro_slip),
    banking_total: new FormControl(this.editBankingObj.banking_total),
    banked_total:new FormControl(this.editBankingObj.banked_total),
    sealed_by:new FormControl(this.editBankingObj.sealed_by),
    cashup_sheets:new FormControl(this.selectedDeposits)
  });
}

@ViewChild('viewContent') viewContent: TemplateRef<any>;
 viewBanking(row) {
  this.viewBankingObj = row;
  this.selectedDeposits = row.cashup_sheets || [];
  // this.dialogService.open(this.viewContent );
  this.modalService.open(this.viewContent, { centered: true, backdrop:true,  windowClass: 'sidebar-modal', size: 'lg' });
}

@ViewChild('deleteContent') deleteContent: TemplateRef<any>;
 deleteBanking(row) {
  this.deleteBankingObj = row;
  this.dialogService.open(this.deleteContent );
 
}

deleteBankingData(d){
  this.depositService.deleteBankingById(d.id);
  this.refreshBankingData();
}


submitEditBanking(){
  if(this.selectedDeposits.length > 0){
    // console.log(this.editForm.value)
  }
}
}
