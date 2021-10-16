import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-banking-action-cell-renderer',
  templateUrl: './banking-action-cell-renderer.component.html',
  styleUrls: ['./banking-action-cell-renderer.component.scss']
})
export class BankingActionCellRendererComponent implements OnInit {

  constructor() { }

  params;
  data;

  ngOnInit(): void {
  }

  agInit(params){
    this.params = params;
    this.data = params.data;
  }

  editBanking(){
    this.params.context.componentParent.editBanking(this.data);
    
  }
  viewBanking(){
    this.params.context.componentParent.viewBanking(this.data);
  }

  deleteBanking(){
     this.params.context.componentParent.deleteBanking(this.data);
  }

}
