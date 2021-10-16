import { NgModule } from '@angular/core';
import { CashManagementRoutingModule } from './cash-management-routing.module';

import { DepositComponent } from './deposit/deposit.component';

import { CashManagementComponent } from './cash-management.component';
import { PendingComponent } from './deposit/pending/pending.component';
import { BankingComponent } from './deposit/banking/banking.component';


import { SharedModule } from '../../shared/shared.module';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';
import { AgGridModule } from 'ag-grid-angular';

import { BankingActionCellRendererComponent } from './deposit/banking/banking-action-cell-renderer/banking-action-cell-renderer.component';

import { NbSelectModule, NbToggleModule } from '@nebular/theme';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [CashManagementRoutingModule,
    CommonModule,
    MatSidenavModule,
    SharedModule,
    NgbModalModule,
    FormsModule,
    MatBadgeModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    NgbModalModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatExpansionModule,
    NbSelectModule,
    NbToggleModule,
    NgbModule,
    AgGridModule.withComponents([]),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
  ],

  declarations: [
    CashManagementComponent,
 
    DepositComponent,
    PendingComponent,
    BankingComponent,

    BankingActionCellRendererComponent,

  ],
  providers: [DatePipe],
  entryComponents: [BankingActionCellRendererComponent,
  
   ],
})
export class CashManagementModule { }
