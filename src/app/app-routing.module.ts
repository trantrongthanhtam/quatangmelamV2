import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {CatalogpageComponent} from './catalogpage/catalogpage.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductdetailpageComponent } from './productdetailpage/productdetailpage.component';

const routes: Routes = [
  {path:"home", component: HomepageComponent},
  {path:"products", component: CatalogpageComponent},
  {path:"checkout", component: CheckoutComponent},
  {path:'products/:id',component:ProductdetailpageComponent},
  {path:"",pathMatch:"full", redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
