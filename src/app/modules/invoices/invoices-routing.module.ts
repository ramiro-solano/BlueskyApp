import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewInvoicesPageComponent } from './pages/new-invoices-page/new-invoices-page.component';

const routes: Routes = [
  {
    path: '',
    component: NewInvoicesPageComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
