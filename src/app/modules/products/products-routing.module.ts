import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosPageComponent } from './pages/productos-page/productos-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductosPageComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
