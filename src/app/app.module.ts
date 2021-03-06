import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CatalogpageComponent } from './catalogpage/catalogpage.component';
import { FooterComponent } from './footer/footer.component';
import {FacebookModule} from 'ngx-facebook';
import { StoreModule} from '@ngrx/store';
import cartReducer from './reducers/cart.reducer';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductdetailpageComponent } from './productdetailpage/productdetailpage.component';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      HomepageComponent,
      CatalogpageComponent,
      FooterComponent,
      CheckoutComponent,
      ProductdetailpageComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      StoreModule.forRoot({cart:cartReducer}),
      FormsModule, ReactiveFormsModule,
      FacebookModule.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
