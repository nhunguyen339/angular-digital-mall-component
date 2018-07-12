import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../models/cart/shopping-cart.service';
import { ShoppingCart } from '../../models/cart/shopping-cart';
import { CartComponent } from '../../cart/cart.component';
import { CartItem } from '../../models/cart/cart-item';

@Component({
  selector: 'app-nav-list-cart',
  templateUrl: './nav-list-cart.component.html',
  styleUrls: ['./nav-list-cart.component.css']
})
export class NavListCartComponent implements OnInit {
 items_counted : number;
  public shoppingCart = new ShoppingCart();

  constructor(
    private shoppingCartService: ShoppingCartService
  ) {
    shoppingCartService.totalStatus$.subscribe(
      status => {
        this.shoppingCart = JSON.parse(this.getStorage());
        console.log(this.shoppingCart.total)
      }
    )
   }

  ngOnInit() {
    this.shoppingCartService.initCart();
    this.shoppingCart = JSON.parse(this.getStorage());
  }
  
  getStorage() {
    return localStorage.getItem('shoppingCart')
  }

}
