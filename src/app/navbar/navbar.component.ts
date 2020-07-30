import { Component, OnInit } from '@angular/core';
import { Store, select, State } from '@ngrx/store';
import { cartState } from '../reducers/cart.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  thecart:number;
  constructor(private store: Store<{cart:cartState}>) {
    this.store.select('cart').subscribe(data => this.thecart = data.total);
  }

  ngOnInit() {}

}
