import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { MonthNavigatorComponent } from './month-navigator/month-navigator.component';

import { PopupWithReasonComponent } from './popup-with-reason/popup-with-reason/popup-with-reason.component';
import { NbButtonModule, NbCardModule,
  NbCheckboxModule, NbDialogModule,
  NbInputModule, NbMenuModule,
  NbPopoverModule, NbSelectModule,
  NbTabsetModule, NbTooltipModule,
  NbWindowModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PopupWithNameComponent } from './popup-with-reason/popup-with-name/popup-with-name/popup-with-name.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { FloatingBadgeComponent } from './floating-badge/floating-badge.component';


const COMPONENTS = [
  MonthNavigatorComponent,
  FloatingBadgeComponent,
  SidebarComponent,
  PopupWithReasonComponent,
  PopupWithNameComponent,

];

const PIPES = [

];

@NgModule({

  declarations: [ ...COMPONENTS, ...PIPES,],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NbCardModule,
    ThemeModule,
    NbMenuModule,
    NbButtonModule,
    NbCheckboxModule,
    NbDialogModule,
    NbInputModule,
    NbPopoverModule,
    NbSelectModule,
    NbTabsetModule,
    NbTooltipModule,
    NbWindowModule,
  ],
    exports: [ ...COMPONENTS, ...PIPES ],

})
export class SharedModule { }
