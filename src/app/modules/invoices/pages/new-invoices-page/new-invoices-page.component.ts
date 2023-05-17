import { Component } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-new-invoices-page',
  templateUrl: './new-invoices-page.component.html',
  styleUrls: ['./new-invoices-page.component.css']
})

export class NewInvoicesPageComponent {
  invoiceForm: FormGroup = new FormGroup({});
  invoiceData: any = {};

  pdfInfo: Array<any> = [
    {
      icon: 'uil-map-marker',
      dato: 'Buenos Aires 10'
    },
    {
      icon: 'uil-envelope',
      dato: 'blueskymobiles.mail@gmail.com'
    },
    {
      icon: 'uil-whatsapp',
      dato: '381-2116637'
    },
    {
      icon: 'uil-instagram',
      dato: '@blueskymobiles'
    }
  ];
  
  
  // Boton para imprimir
  generatePDF(): void{
    this.invoiceData = this.invoiceForm.getRawValue();
    const div: any = document.querySelector("#invoice");
    
    

    const widthInPixels = 842;
    const heightInPixels = 595;
    const pixelsToMillimeters = 0.264583;

    const widthInMillimeters = widthInPixels * pixelsToMillimeters;
    const heightInMillimeters = heightInPixels * pixelsToMillimeters;
    console.log(widthInMillimeters, heightInMillimeters);
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: [widthInMillimeters,heightInMillimeters]
    });
    
    setTimeout(() => {
      div?.classList.remove("hidden");
      div?.classList.add("flex");
      html2canvas(div, {
        scale: 4
      }).then((canvas)=> {
        const img = canvas.toDataURL('image/PNG', 1.0);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        pdf.addImage(img, 'PNG', 0,0,pdfWidth,pdfHeight, undefined);
        return pdf;
      }).then((pdfResult)=> {
        // pdfResult.output('dataurlnewwindow', {filename: 'invoice-1.pdf'});
        // pdfResult.save(`${new Date().toDateString()}-invoice.pdf`);
        // pdfResult.autoPrint();
        window.open(pdfResult.output('bloburl'), '_blank');
      });
      div?.classList.remove("flex");
      div?.classList.add("hidden");
    },100);

    // Restablece los valores del form
    this.invoiceForm.reset();
  }

  constructor() {}

  ngOnInit(): void {
    this.invoiceForm = new FormGroup(
      {
        name: new FormControl('a', [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*')
        ]),
        numberPhone: new FormControl('1',[
          Validators.required
        ]),
        deviceToRepair: new FormControl('a',[
          Validators.required
        ]),
        description: new FormControl('a',[
          Validators.required
        ]),
        report: new FormControl('a'),
        payment: new FormControl('a',[
          Validators.required
        ]),
        total: new FormControl('1',[
          Validators.required,
          Validators.pattern('[0-9]*')
        ])
      }
    )
  }
}
