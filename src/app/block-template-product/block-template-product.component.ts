import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../models/book.service'
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { CartItem } from '../models/cart/cart-item';
import { ShoppingCart } from '../models/cart/shopping-cart';
import { ShoppingCartService } from '../models/cart/shopping-cart.service';

@Component({
  selector: 'app-block-template-product',
  templateUrl: './block-template-product.component.html',
  styleUrls: ['./block-template-product.component.css']
})
export class BlockTemplateProductComponent implements OnInit {
  books: Book[] = [];
  book: Book[];
  currentItem = new CartItem();
  shoppingCart: ShoppingCart;

  constructor(
    private bookService: BookService,
    private shoppingCartService: ShoppingCartService,
  ) { }

  ngOnInit() {
    this.getBooks();
    this.shoppingCartService.initCart();
    // this.initCart();
    // this.getGenres();
  }
  

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }

  // =================shoppping cart ===================

  addItem(book: Book,quantity:number ) {
    this.shoppingCartService.addItem(book, quantity);
    this.shoppingCartService.calculateTotal();
  }
  removeItem(book: Book) {
    this.shoppingCartService.removeItem(book);
  }
 
  // initCart() {
  //   if (this.getStorage()) {
  //     this.shoppingCart = JSON.parse(this.getStorage());
  //     console.log("get local cart")
  //   }
  //   else {
  //     this.shoppingCart = new ShoppingCart();
  //     this.setStorage(this.shoppingCart);
  //     console.log(";tao moi cart")
  //   }

  // }
  // getStorage() {
  //   return localStorage.getItem('shoppingCart');
  // }

  // setStorage(shoppingCart: ShoppingCart) {
  //   return localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart))
  // }

  // addItem(book: Book, quantity: number): void {
  //   const item = new CartItem();
  //   let findItem = this.shoppingCart.items.find((p) => p.productId == book._id);
  //   if (findItem) {
  //     let findIndex = this.shoppingCart.items.findIndex((i) => i.productId === book._id);
  //     this.shoppingCart.items[findIndex].quantity += quantity;
  //     console.log('co item');
  //   } else {
  //     item.productId = book._id;
  //     item.quantity += quantity;
  //     this.shoppingCart.items.push(item);
  //     console.log(item);
  //   } 
  //   this.setStorage(this.shoppingCart);
  // }

  // removeItem(book: Book): void {
  //   const shoppingCart = new ShoppingCart();
  //   let findItem = this.shoppingCart.items.find((p) => p.productId == book._id);
  //   if (findItem) {
  //     let findIndex = this.shoppingCart.items.findIndex((i) => i.productId === book._id);
  //     this.shoppingCart.items[findIndex].quantity = 0;
  //     shoppingCart.items = this.shoppingCart.items.filter((p) => p.quantity > 0)
  //     console.log(`da xoa item ${book.title}`)
  //   } else {
  //     console.log('k tim thay')
  //   }
  //   this.shoppingCart.items = shoppingCart.items;
  //   this.setStorage(this.shoppingCart)
  // }

  // calculate() {
  //   let total = 0;
  //   for (let i = 0; i < this.shoppingCart.items.length; i++) {
  //     let findItem = this.books.find((p) => p._id == this.shoppingCart.items[i].productId);
  //     total += this.shoppingCart.items[i].quantity*findItem.sellingPrice;
  //   }
  //   this.shoppingCart.total = total;
  //   this.setStorage(this.shoppingCart)
  //   console.log(JSON.parse(this.getStorage()).total);
  // }
  


}


