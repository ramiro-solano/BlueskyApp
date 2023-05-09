import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos-page',
  templateUrl: './productos-page.component.html',
  styleUrls: ['./productos-page.component.css']
})
export class ProductosPageComponent implements OnInit{
  productsList: Array<any> = [];

  constructor() {}
  
  ngOnInit(): void {
    this.productsList = [
      {
        product: 'Cable USB V8',
        price: '1000',
        category: 'USB'
      },
      {
        product: 'Cable USB Tipo C',
        price: '1200',
        category: 'USB'
      }
    ]
  }

}
