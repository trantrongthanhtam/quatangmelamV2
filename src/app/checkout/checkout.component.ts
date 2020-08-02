import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cartState } from '../reducers/cart.reducer';
import {UpQuantity, DownQuantity, RemoveFromCart} from '../actions/cart.actions';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public checkoutitems;
  public sum;
  private oldcheckout;
  public customerForm = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    phone : new FormControl(''),
    address : new FormControl(''),
    checked : new FormControl(''),
    
  })

  onSubmit(value){
    console.log(value);
  }
  constructor(private store:Store<{cart:cartState}> ) { 
  }
  removeProduct(item){
    this.store.dispatch(new RemoveFromCart(item) );
  }
  upQuantity(product){
    this.store.dispatch(new UpQuantity(product));
  }

  downQuantity(product){
    this.store.dispatch(new DownQuantity(product));
  }

  ngOnInit() {
    this.store.select('cart').subscribe(data => this.checkoutitems = data.cartProducts);
    
  }
  ngDoCheck(){
    if (this.checkoutitems !== this.oldcheckout) {
      this.sum = this.checkoutitems.reduce((acc,item) => acc+(item.pricenumber*item.quantity),0);
    }
    this.oldcheckout = this.checkoutitems;
  }

}

