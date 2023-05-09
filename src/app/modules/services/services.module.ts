import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServiciosPageComponent } from './pages/servicios-page/servicios-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    ServiciosPageComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule
  ]
})
export class ServicesModule { }
