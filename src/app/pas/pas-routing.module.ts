import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboradComponent } from './dashborad/dashborad.component';

import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { PASComponent } from './pas.component';

import { DepositComponent } from './cash-management/deposit/deposit.component';
import { PendingComponent } from './cash-management/deposit/pending/pending.component';
import { BankingComponent } from './cash-management/deposit/banking/banking.component';



const routes: Routes = [{
  path: '',
  component: PASComponent,
  children: [
    {
      path: 'dashborad',
      component: DashboradComponent,
    },
    {
      path: '',
      redirectTo: 'dashborad',
      pathMatch: 'full',
      component: DashboradComponent,
    },
    
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
   

  
    {
      path: '**',
      component: NotFoundComponent,
    },

  ],
},
];

//   ]
// }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PASRoutingModule { }
