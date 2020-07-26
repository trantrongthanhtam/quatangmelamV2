import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {CatalogpageComponent} from './catalogpage/catalogpage.component';

const routes: Routes = [
  {path:"home", component: HomepageComponent},
  {path:"", component: HomepageComponent},
  {path:"catalog", component: CatalogpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
