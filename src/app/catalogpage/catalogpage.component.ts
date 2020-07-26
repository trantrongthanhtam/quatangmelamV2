import { Component, OnInit } from '@angular/core';
import products from '../../assets/nhhoa/products.json';

@Component({
  selector: 'app-catalogpage',
  templateUrl: './catalogpage.component.html',
  styleUrls: ['./catalogpage.component.css'],
})
export class CatalogpageComponent implements OnInit {
  public products = [];
  constructor() {}

  ngOnInit() {
    let temp = Object.values(products);
    for (let product of temp) {
      this.products.push(Object.values(product));
    }
  }
}
