import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosPageComponent } from './pages/servicios-page/servicios-page.component';

const routes: Routes = [
  {
    path: '',
    component: ServiciosPageComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
