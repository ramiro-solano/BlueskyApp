import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios-page',
  templateUrl: './servicios-page.component.html',
  styleUrls: ['./servicios-page.component.css']
})
export class ServiciosPageComponent implements OnInit {
  servicesList: Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    this.servicesList = [
      {
        service: 'Pin de carga V8',
        publicPrice: '3500',
        guildPrice: '1000'
      },
      {
        service: 'Pin de carga tipo C',
        publicPrice: '5000',
        guildPrice: '2500'
      },
      {
        service: 'Cambio de modulo',
        publicPrice: 'Consultar',
        guildPrice: '2000'
      },
      {
        service: 'Sacar cuenta de Google',
        publicPrice: '3500',
        guildPrice: '1000'
      },
      {
        service: 'Ic de carga',
        publicPrice: '--',
        guildPrice: '--'
      },
      {
        service: 'Ic de audio',
        publicPrice: '--',
        guildPrice: '--'
      },
      {
        service: 'Limpieza iPhone',
        publicPrice: '2000',
        guildPrice: '--'
      },
      {
        service: 'Software iPhone',
        publicPrice: '4000',
        guildPrice: '1500'
      },
    ]
  }

}
