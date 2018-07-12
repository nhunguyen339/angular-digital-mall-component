
import { OnInit, Injectable } from "@angular/core";
import { Book } from "../book";
import { CartItem } from "./cart-item";
import { BookService } from "../book.service";
import { ShoppingCart } from "./shopping-cart";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs";

@Injectable()
export class ShoppingCartService implements OnInit {
    shoppingCart: ShoppingCart;
    books: Book[] = [];

    totalSource = new Subject<String>();

    constructor(private bookService: BookService) {
        this.bookService.getBooks()
            .subscribe(books => this.books = books);
    }
    ngOnInit() {
    }

    totalStatus$ = this.totalSource.asObservable();
  

    initCart(): void {
        if (this.getStorage()) {
            this.shoppingCart = JSON.parse(this.getStorage())
            console.log('parse shoppingCart from storage');
        } else {
            this.shoppingCart = new ShoppingCart();
            this.setStorage();
            console.log('tao moi shoppingCart');
        }
    }

    getStorage() {
        return localStorage.getItem('shoppingCart');
    }
    setStorage() {
        localStorage.setItem("shoppingCart", JSON.stringify(this.shoppingCart));
        this.totalSource.next(JSON.stringify(this.shoppingCart));

    }
    removeStorage(shoppingCart: ShoppingCart) {
        return localStorage.removeItem('shoppingCart')
    }
    updateCart(shoppingCart: ShoppingCart) {
        this.shoppingCart = shoppingCart;
        this.calculateCounted();
        this.calculateTotal(); 
        this.setStorage();
    }

    addItem(book: Book, quantity: number) {
        this.bookService.getBooks()
            .subscribe(books => this.books = books);
        const item = new CartItem();
        let findItem = this.shoppingCart.items.find((p) => p.productId == book._id)
        if (findItem) {
            let findIndex = this.shoppingCart.items.findIndex((i) => i.productId == book._id);
            this.shoppingCart.items[findIndex].quantity += quantity;
            // this.shoppingCart.items[findIndex].image = book.images.main;
            // this.shoppingCart.items[findIndex].title = book.title;
            console.log('item already exist')
        } else {
            item.quantity = quantity;
            item.productId = book._id;
            item.image = book.images.main;
            item.title = book.title;
            item.sellingPrice = book.sellingPrice;
            item.previousPrice = book.previousPrice;
            this.shoppingCart.items.push(item);
            console.log('add new item');
        }
        this.setStorage();
    }

    removeItem(cartItem: CartItem) {
        const shoppingCart = new ShoppingCart();
        let findItem = this.shoppingCart.items.find((p) => p.productId == cartItem.productId);
        if (findItem) {
            let findIndex = this.shoppingCart.items.findIndex((i) => i.productId == cartItem.productId);
            this.shoppingCart.items[findIndex].quantity = 0;
            shoppingCart.items_counted = this.shoppingCart.items_counted - this.shoppingCart.items[findIndex].quantity;
            shoppingCart.items = this.shoppingCart.items.filter((b) => b.quantity > 0);
            console.log(`remove item ${cartItem.title}`);
        } else {
            console.log('item is not add before');
        }
        this.shoppingCart.items = shoppingCart.items;
        this.setStorage();
    }
    // removeItem(book: Book) {
    //     const shoppingCart = new ShoppingCart();
    //     let findItem = this.shoppingCart.items.find((p) => p.productId == book._id);
    //     if (findItem) {
    //         let findIndex = this.shoppingCart.items.findIndex((i) => i.productId == book._id);
    //         this.shoppingCart.items[findIndex].quantity = 0;
    //         shoppingCart.items = this.shoppingCart.items.filter((b) => b.quantity > 0);

    //         console.log(`remove item ${book.title}`);
    //     } else {
    //         console.log('item is not add before');
    //     }
    //     this.shoppingCart.items = shoppingCart.items;
    //     this.setStorage(this.shoppingCart);
    // }

    calculateTotal() {
        let total = 0;
        for (let i = 0; i < this.shoppingCart.items.length; i++) {
            let findItem = this.shoppingCart.items.find((p) => p.productId == this.shoppingCart.items[i].productId);
            total += (this.shoppingCart.items[i].quantity) * findItem.sellingPrice;
        }
        this.shoppingCart.total = total;
        this.setStorage()
        console.log(JSON.parse(this.getStorage()).total);
        console.log('service');
    }
    calculateCounted() {
        let count = 0;
        for (let i = 0; i < this.shoppingCart.items.length; i++) {
            count += this.shoppingCart.items[i].quantity;
        }
        this.shoppingCart.items_counted = count;
        this.setStorage();
        console.log(count);
    }
}