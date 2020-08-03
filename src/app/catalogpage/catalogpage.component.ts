import { Component, OnInit } from '@angular/core';
import products from '../../assets/nhhoa/products.json';
import {CartService} from '../cart.service';
import { Store } from '@ngrx/store';
import {AddToCart} from '../actions/cart.actions';
import { ActivatedRoute } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-catalogpage',
  templateUrl: './catalogpage.component.html',
  styleUrls: ['./catalogpage.component.css'],
})
export class CatalogpageComponent implements OnInit {
  public products = [];
  public minPrice:number = 0; maxPrice:number = 1000;
  private allproducts=[];
  private queryfilter;
  public checkedradio=[['all',true],['hoalan',false],['hoahong',false],['hoasen',false],['hoadai',false]];

  constructor(private store:Store, private route: ActivatedRoute) {

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

  ngOnInit() {
    AOS.init();
    this.allproducts = Object.values(products);
    this.route.queryParams.subscribe(params=> this.queryfilter = params['filter']);
    if (this.queryfilter === "all" || !this.queryfilter) {
      this.products = this.allproducts;
    } else {
      this.products = this.allproducts.filter(item => item.species ==this.queryfilter)
      this.checkedradio.forEach(element => {
        if (element[0]===this.queryfilter){
          element[1] = true;
        } else element[1]=false;
      });
    }
  }
}
