import { Component, OnInit } from '@angular/core';
import products from '../../assets/nhhoa/products.json';
import { ActivatedRoute } from '@angular/router';
import {AddToCart} from '../actions/cart.actions';
import { Store } from '@ngrx/store';
import * as AOS from 'aos';

@Component({
  selector: 'app-productdetailpage',
  templateUrl: './productdetailpage.component.html',
  styleUrls: ['./productdetailpage.component.css']
})
export class ProductdetailpageComponent implements OnInit {
  public product; 
  public randompickproducts=[]; 
  private products=[];
  public imgNo = '1';
  public numberofproductimages:number;imgshow=[];
  private oldID;
  constructor(private route: ActivatedRoute,private store:Store) { }

  onImgChange(e){
    this.imgNo = e.getAttribute('data-imgno');
  }
  onIDChange(){
    this.product = this.products.filter(product => product.id == this.route.snapshot.paramMap.get('id'))
  }

  addToCart(product) {
    this.store.dispatch(new AddToCart(product[0]))
  }
  addToCart2(product) {
    this.store.dispatch(new AddToCart(product))
  }

  ngOnInit() {
    AOS.init();
    this.products = Object.values(products);
    this.product = this.products.filter(product => product.id == this.route.snapshot.paramMap.get('id'))
    this.numberofproductimages=parseInt(this.product[0].numberofimg);
    for (let i=0;i<this.numberofproductimages;i++){
      this.imgshow.push(`${this.product[0].imgdir}${this.product[0].id}-${i+1}.jpg`)
    }
    function containsObject(obj, list, currentproduct) {
      var i;
      for (i = 0; i < list.length; i++) {
        if (list[i] === obj || currentproduct[0] === obj) {
          return true;
        }
      }

      return false;
    }
    for (let i = 0; i < 4; ) {
      let product = this.products[
        Math.floor(Math.random() * this.products.length)
      ];
      if (!containsObject(product, this.randompickproducts, this.product)) {
        this.randompickproducts.push(product);
        i++;
      } else continue;
    }
  }
  ngDoCheck() {
    if (this.route.snapshot.paramMap.get('id') !== this.oldID) {
      this.product = this.products.filter(product => product.id == this.route.snapshot.paramMap.get('id'));
      this.imgNo='1';
      this.imgshow=[];
      this.numberofproductimages=parseInt(this.product[0].numberofimg);
    for (let i=0;i<this.numberofproductimages;i++){
      this.imgshow.push(`${this.product[0].imgdir}${this.product[0].id}-${i+1}.jpg`)
    }
    }
    this.oldID = this.route.snapshot.paramMap.get('id');
  }
}
