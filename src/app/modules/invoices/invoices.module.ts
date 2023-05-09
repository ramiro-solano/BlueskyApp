import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { NewInvoicesPageComponent } from './pages/new-invoices-page/new-invoices-page.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    NewInvoicesPageComponent
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    SharedModule,
  ]
})
export class InvoicesModule { }
