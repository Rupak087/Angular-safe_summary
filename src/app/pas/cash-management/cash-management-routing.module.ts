import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashManagementComponent } from './cash-management.component';
import { BankingComponent } from './deposit/banking/banking.component';
import { DepositComponent } from './deposit/deposit.component';
import { PendingComponent } from './deposit/pending/pending.component';


const routes: Routes = [
  {
    path: '',
    component: CashManagementComponent,
    children: [

     
      {
        path: 'deposit',
        component: DepositComponent,
        children: [
          {
            path: '',
            redirectTo: 'pending',
            pathMatch: 'full',
          },
          {
            path: 'pending',
            component: PendingComponent,
          },
          {
            path: 'banking',
            component: BankingComponent,
          },
        ],
      },
    
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashManagementRoutingModule { }
