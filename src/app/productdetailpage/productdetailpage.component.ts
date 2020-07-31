import { Component, OnInit } from '@angular/core';
import products from '../../assets/nhhoa/products.json';
import { ActivatedRoute } from '@angular/router';
import {AddToCart} from '../actions/cart.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-productdetailpage',
  templateUrl: './productdetailpage.component.html',
  styleUrls: ['./productdetailpage.component.css']
})
export class ProductdetailpageComponent implements OnInit {
  public product; 
  public products;
  public imgNo = '1';
  constructor(private route: ActivatedRoute,private store:Store) { }

  onImgChange(e){
    this.imgNo = e.getAttribute('data-imgno');
    console.log(this.imgNo);
  }

  addToCart(product) {
    this.store.dispatch(new AddToCart(product[0]))
  }
  addToCart2(product) {
    this.store.dispatch(new AddToCart(product))
  }

  ngOnInit() {
    this.products = Object.values(products);
    this.product = this.products.filter(product => product.id == this.route.snapshot.paramMap.get('id'))

  }

}
