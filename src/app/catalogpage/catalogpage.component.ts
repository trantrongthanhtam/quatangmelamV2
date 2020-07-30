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

  constructor(private store:Store) {

  }
  logout(product){
    console.log(product);
  }
  
  addToCart(product) {
    this.store.dispatch(new AddToCart(product))
  }

  ngOnInit() {
    let temp = Object.values(products);
    for (let product of temp) {
      this.products.push(Object.values(product));
    }
  }
}
