import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {CatalogpageComponent} from './catalogpage/catalogpage.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path:"home", component: HomepageComponent},
  {path:"", component: HomepageComponent},
  {path:"catalog", component: CatalogpageComponent},
  {path:"checkout", component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
