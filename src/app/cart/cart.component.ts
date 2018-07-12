import { Component, OnInit } from '@angular/core';
import { BookService } from '../models/book.service';
import { ShoppingCartService } from '../models/cart/shopping-cart.service';
import { ShoppingCart } from '../models/cart/shopping-cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  shoppingCart = new ShoppingCart();
  constructor(
    private shoppingCartService: ShoppingCartService,
    private bookService: BookService,
  ) { 
    shoppingCartService.totalStatus$.subscribe(
      status => {
        this.shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
      }
    )
  }
  ngOnInit() {
  }

}
