import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductosPageComponent } from './pages/productos-page/productos-page.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    ProductosPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
