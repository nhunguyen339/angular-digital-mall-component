import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SearchComponent } from "./nav/search/search.component";

const routes : Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'product-detail/:_id', component: ProductDetailComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'search', component: SearchComponent },
  // { path: ':category/:subcategory/:_id', component: ProductDetailComponent },
  // { path: ':category/:subcategory', component: CategoryComponent },
  // { path: ':category/:_id', component: ProductDetailComponent },
  { path: 'category', component: CategoryComponent,
    children: [
      { path: ':_id', component: ProductDetailComponent },
    ] },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule ({
  imports : [ RouterModule.forRoot(routes) ],
  exports : [ RouterModule ]
})
export class AppRoutingModule {}
