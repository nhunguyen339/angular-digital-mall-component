import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ShoppingCart } from '../models/cart/shopping-cart';
@Component({
  selector: 'app-total-cart',
  templateUrl: './total-cart.component.html',
  styleUrls: ['./total-cart.component.css']
})
export class TotalCartComponent implements OnInit {
  public shoppingCart : ShoppingCart
  constructor(
    
  ) { }

  ngOnInit() {
    this.shoppingCart = JSON.parse(this.getStorage())
  }
  
  getStorage() {
    return localStorage.getItem('shoppingCart')
  }
}
