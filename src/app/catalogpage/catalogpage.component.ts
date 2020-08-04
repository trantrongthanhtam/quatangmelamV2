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
  private products = [];
  public minPrice:number = 0; maxPrice:number = 1000;
  public productsShow=[];
  public paging=[];activepage:number=0;
  private allproducts=[];

  private queryfilter;
  public checkedradio=[['all',true],['hoalan',false],['hoahong',false],['hoasen',false],['hoadai',false],['hoakhac',false]];

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
    let noofpage = Math.ceil(this.products.length/10);
    this.paging=[];
    this.activepage=0;
    for (let i =0;i<noofpage;i++) {
      if (i==0){
        this.paging.push([true,i+1])
      } else this.paging.push([false,i+1])
    }
    this.productsShow=this.products.slice(this.activepage*10,this.activepage*10+10);
  }

  onpagechange(page){
    this.paging.forEach((element,index) => {
      if (index == page){element[0]=true;this.activepage=page} else element[0]=false
    });
    this.productsShow=this.products.slice(this.activepage*10,this.activepage*10+10);
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
    let noofpage = Math.ceil(this.products.length/10);
    for (let i =0;i<noofpage;i++) {
      if (i==0){
        this.paging.push([true,i+1])
      } else this.paging.push([false,i+1])
    }
    this.productsShow=this.products.slice(this.activepage*10,this.activepage*10+10);
  }
}
