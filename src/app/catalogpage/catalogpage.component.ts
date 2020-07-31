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
  public minPrice:number = 0; maxPrice:number = 1000;
  private allproducts=[];
  constructor(private store:Store) {

  }

  
  addToCart(product) {
    this.store.dispatch(new AddToCart(product))
  }

  onfilterchange(value){
    if (value === "all") {
      this.products = this.allproducts;
    } else {
      this.products = this.allproducts.filter(item => item.species ==value)
    }
  }

  onMinPriceChange(value) {
    this.minPrice = value;
  }

  onMaxPriceChange(value) {
    if (value < this.minPrice) {
      this.maxPrice = this.minPrice;
    } else this.maxPrice = value;
  }

  ngOnInit() {
    this.allproducts = Object.values(products);
    this.products = this.allproducts;
  }
}
