import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'invoice',
    pathMatch: 'full'
  },
  {
    path: 'invoice',
    loadChildren: () => import('@modules/invoices/invoices.module').then(m => m.InvoicesModule)
  },
  {
    path: 'products',
    loadChildren: () => import('@modules/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'services',
    loadChildren: () => import('@modules/services/services.module').then(m => m.ServicesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
