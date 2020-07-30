import { Component, OnInit } from '@angular/core';
import products from '../../assets/nhhoa/products.json';
import {CartService} from '../cart.service';
import { Store } from '@ngrx/store';
import {AddToCart} from '../actions/cart.actions';

@Component({
  selector: 'app-catalogpage',
  templateUrl: './catalogpage.component.html',
  styleUrls: ['./catalogpage.component.css'],
})
export class CatalogpageComponent implements OnInit {
  public products = [];
  private allproducts=[];
  constructor(private store:Store) {

  }
  logout(product){
    console.log(product);
  }
  
  addToCart(product) {
    this.store.dispatch(new AddToCart(product))
  }

  onfilterchange(value){
    if (value === "all") {
      this.products = this.allproducts;
    } else {
      this.products = this.allproducts.filter(item => item[1]==value)
    }
  }

  ngOnInit() {
    let temp = Object.values(products);
    for (let product of temp) {
      this.allproducts.push(Object.values(product));
      this.products = this.allproducts;
    }
  }
}
