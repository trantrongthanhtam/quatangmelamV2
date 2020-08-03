import { Component, OnInit } from '@angular/core';
import products from '../../assets/nhhoa/products.json';
import { AddToCart } from '../actions/cart.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  public randompickproducts = [];
  private products = [];
  constructor(private store: Store, private router:Router) {}

  addToCart(product) {
    this.store.dispatch(new AddToCart(product));
  }

  onfilter(target){
    this.router.navigate(['/products'], { queryParams: { filter: target.getAttribute('data-filter') } });
  }


  ngOnInit() {
    AOS.init();
    this.products = Object.values(products);
    function containsObject(obj, list) {
      var i;
      for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
          return true;
        }
      }

      return false;
    }
    for (let i = 0; i < 4; ) {
      let product = this.products[
        Math.floor(Math.random() * this.products.length)
      ];
      if (!containsObject(product, this.randompickproducts)) {
        this.randompickproducts.push(product);
        i++;
      } else continue;
    }
  }
}
