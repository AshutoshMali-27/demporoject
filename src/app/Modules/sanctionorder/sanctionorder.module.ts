import { SanctionorderslipComponent } from './sanctionorderslip/sanctionorderslip.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanctionorderRoutingModule } from './sanctionorder-routing.module';

import { SanctionorderentryComponent } from './sanctionorderentry/sanctionorderentry.component';
import { SharedModule } from '../../shared/shared.module';
import { SanctionorderinboxComponent } from './sanctionorderinbox/sanctionorderinbox.component';
import { SanctionorderoutboxComponent } from './sanctionorderoutbox/sanctionorderoutbox.component';
import { HideifemptyDirective } from '../../shared/Directive/hideifempty.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { DropdownComponent } from '../../shared/Component/dropdown/dropdown.component';
import { SanctionorderinboxnewComponent } from './sanctionorderinboxnew/sanctionorderinboxnew.component';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    SanctionorderslipComponent,
    SanctionorderentryComponent,
    SanctionorderinboxComponent,
    SanctionorderoutboxComponent ,
    SanctionorderinboxnewComponent,
    
  ],
  imports: [
    CommonModule,
    SanctionorderRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownComponent,
 
    
    
  ]
})
export class SanctionorderModule { }
