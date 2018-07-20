import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../../models/cart/shopping-cart';
import { CartItem } from '../../models/cart/cart-item';
import { Book } from '../../models/book';
import { ShoppingCartService } from '../../models/cart/shopping-cart.service';
import { BookService } from '../../models/book.service';

@Component({
  selector: 'app-list-product-cart',
  templateUrl: './list-product-cart.component.html',
  styleUrls: ['./list-product-cart.component.css']
})
export class ListProductCartComponent implements OnInit {
  shoppingCart: ShoppingCart;
  books: Book[] = [];
  booksInCart: Book[];
  // items: CartItem[];
  anounce: Boolean;

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
    this.shoppingCartService.initCart();
    this.shoppingCart = JSON.parse(this.shoppingCartService.getStorage());
  }

  removeItem(cartItem: CartItem) {
    this.shoppingCartService.removeItem(cartItem);
    this.shoppingCartService.calculateTotal();
    this.shoppingCartService.calculateCounted();
    this.shoppingCartService.setStorage();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(
      books => {
        this.books = books;
      } 
    )
  }
  updateCart() {
    this.shoppingCartService.updateCart(this.shoppingCart);
    this.shoppingCartService.setStorage();
    console.log('update');
  }

 
}



