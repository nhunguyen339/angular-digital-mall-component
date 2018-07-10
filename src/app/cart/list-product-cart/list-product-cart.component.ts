import { Component, OnInit } from '@angular/core';
import { ShoppingCart} from '../../models/cart/shopping-cart';
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
  // cartItems: CartItem[] = [];
  books: Book[] = [];
  booksInCart: Book[];
items: CartItem[]
  constructor(
    private shoppingCartService: ShoppingCartService,
    private bookService: BookService,
  ) { }

  ngOnInit() {
    this.shoppingCartService.initCart();
    this.shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'))
    this.getBooks();
   this.items = this.shoppingCart.items
    // this.getBook_cart();
  }

  removeItem(book: Book) {
    this.shoppingCartService.removeItem(book);
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(
      books => {
        this.books = books;
      }
      
    )
  }

  // cartItems : CartItem = JSON.parse(localStorage.getItem('shoppingCart')).items;

  // getBook_cart() {
  //   for (var i = 0; i < this.books.length; i++) {
  //     // let findIndex = this.shoppingCart.items.findIndex((i) => i.productId == this.book._id)
  //     this.booksInCart = this.books.filter((b) => b._id == this.shoppingCart.items[i].productId)
  //   }
  //   console.log(this.booksInCart);
  // }

  // findItem(books: Book[]) {
  //   books = this.books;
  //   const item = new ItemsFound();
  //   const items = new Array<ItemsFound>();
  //   for (let i = 0; i < this.shoppingCart.items.length; i++) {
  //     for (let j = 0; j < books.length; j++) {
  //       // let find = this.shoppingCart.items.find((i) => (i).productId == books[j]._id );
  //       // item = find;
  //       let find = books.find((b) => b._id == this.shoppingCart.items[i].productId);
  //       item.book = find;
  //       item.quatity = this.shoppingCart.items[i].quantity;
  //       items.push(item);
  //     }
  //   }
  //   this.itemsFound = items;
  //   console.log(this.itemsFound.toString());
  // }
}



