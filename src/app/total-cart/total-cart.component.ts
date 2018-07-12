import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ShoppingCart } from '../models/cart/shopping-cart';
import { ShoppingCartService } from '../models/cart/shopping-cart.service';
@Component({
  selector: 'app-total-cart',
  templateUrl: './total-cart.component.html',
  styleUrls: ['./total-cart.component.css']
})
export class TotalCartComponent implements OnInit {
  public shoppingCart = new ShoppingCart();
  items_counted : number;
  constructor(
    private shoppingCartService: ShoppingCartService
  ) {
    shoppingCartService.totalStatus$.subscribe(
      status => {
        this.shoppingCart = JSON.parse(this.getStorage());
      }
    )
   }

  ngOnInit() {
    this.shoppingCart = JSON.parse(this.getStorage());
  }
  
  getStorage() {
    return localStorage.getItem('shoppingCart')
  }
}
