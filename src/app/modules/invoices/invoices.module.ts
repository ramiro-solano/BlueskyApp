import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesRoutingModule } from './invoices-routing.module';
import { NewInvoicesPageComponent } from './pages/new-invoices-page/new-invoices-page.component';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    NewInvoicesPageComponent
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class InvoicesModule { }
