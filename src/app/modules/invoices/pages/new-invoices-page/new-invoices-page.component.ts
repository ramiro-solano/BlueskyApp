import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-invoices-page',
  templateUrl: './new-invoices-page.component.html',
  styleUrls: ['./new-invoices-page.component.css']
})

export class NewInvoicesPageComponent {
  clientForm: FormGroup;

  iconsAlert: Array<any> = [{
    done: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z',
    fail: 'M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z'
  }];
  iconAlerState = this.iconsAlert[0]
  showAlert: boolean = false;

  alertButton(): void{
    const alert = document.querySelector('div[name="alert-container"');
    this.showAlert === false? (this.showAlert = !this.showAlert, alert?.classList.add('alert-container--active')):
    (this.showAlert = !this.showAlert, alert?.classList.remove('alert-container--active'))
  }

  // Boton para imprimir
  printForm(): void{
    let printSuccess: boolean = false;
    const pathIcon = document.querySelector('#pathIcon');
    const alert = document.querySelector('div[name="alert-container"');
    
    // Cambia los estilo segun el estado de la impresion
    if (printSuccess){
      pathIcon?.setAttribute('d', this.iconsAlert[0].done);
      alert?.classList.add('print-success');
      this.alertButton();
    }
    else{
      pathIcon?.setAttribute('d', this.iconsAlert[0].fail);
      alert?.classList.add('print-failed');
      this.alertButton();
    }
    
    // this.alertButton();
    // Si ya se quito la alerta no se la quita de nuevo
    setTimeout(() =>{
      if (this.showAlert){
        this.alertButton()
    }},5000)
  }

  constructor() {
    this.clientForm = new FormGroup({
      name: new FormControl(''),
      phone: new FormControl(''),
      device: new FormControl(''),
      failure: new FormControl(''),
      report: new FormControl(''),
      payment: new FormControl(''),
      total: new FormControl('')
    })
  }

  onSubmit() {
    console.log(this.clientForm.value);
  }
}
