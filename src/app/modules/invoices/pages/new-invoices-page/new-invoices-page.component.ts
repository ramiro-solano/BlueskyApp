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
  pdfInfo: Array<any> = [];

  
  
  
  // Boton para imprimir
  generatePDF(): void{
    this.invoiceData = this.invoiceForm.getRawValue();
    const div: any = document.querySelector("#invoice");
    
    const widthInPixels = 842;
    const heightInPixels = 595;
    const pixelsToMillimeters = 0.264583;
    const widthInMillimeters = widthInPixels * pixelsToMillimeters;
    const heightInMillimeters = heightInPixels * pixelsToMillimeters;

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
        pdfResult.autoPrint();

        const hiddFrame: any = document.createElement('iframe');
        hiddFrame.style.position = 'fixed';
        hiddFrame.style.width = '1px';
        hiddFrame.style.height = '1px';
        hiddFrame.style.opacity = '0.01';
        const isSafari = /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent);
        if (isSafari) {
          // fallback in safari
          hiddFrame.onload = () => {
            try {
              hiddFrame.contentWindow.document.execCommand('print', false, null);
            } catch (e) {
              hiddFrame.contentWindow.print();
            }
          };
        }
        hiddFrame.src = pdfResult.output('bloburl');
        document.body.appendChild(hiddFrame);

        // pdfResult.save(`${new Date().toDateString()}-invoice.pdf`);
        // window.open(pdfResult.output('bloburl'), '_blank');
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
        name: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*')
        ]),
        numberPhone: new FormControl('',[
          Validators.required
        ]),
        deviceToRepair: new FormControl('',[
          Validators.required
        ]),
        description: new FormControl('',[
          Validators.required
        ]),
        report: new FormControl(''),
        payment: new FormControl('',[
          Validators.required
        ]),
        total: new FormControl('',[
          Validators.required,
          Validators.pattern('[0-9]*')
        ])
      }
    );

    this.pdfInfo = [
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
  }
}
