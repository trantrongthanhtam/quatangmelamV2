import { Component, OnInit } from '@angular/core';
import products from '../../assets/nhhoa/products.json';
import {AddToCart} from '../actions/cart.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public products = [];
  constructor(private store:Store) { }
  addToCart(product){
    this.store.dispatch(new AddToCart(product));
  }
  ngOnInit() {
    let temp = Object.values(products);
    for (let product of temp) {
      this.products.push(Object.values(product));
    }
  }

}
