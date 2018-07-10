
import { OnInit, Injectable } from "@angular/core";
import { Book } from "../book";
import { CartItem } from "./cart-item";
import { BookService } from "../book.service";
import { ShoppingCart } from "./shopping-cart";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ShoppingCartService implements OnInit {
    shoppingCart: ShoppingCart;
    books: Book[] = [];
    

    constructor(private bookService: BookService) {

    }
    ngOnInit() {
    }

    initCart(): void {
        if (this.getStorage()) {
            this.shoppingCart = JSON.parse(this.getStorage())
            console.log('parse shoppingCart from storage');
        } else {
            this.shoppingCart = new ShoppingCart;
            this.setStorage(this.shoppingCart);
            console.log('tao moi shoppingCart')
        }
    }

    getStorage() {
        return localStorage.getItem('shoppingCart');
    }
    setStorage(shoppingCart: ShoppingCart) {
        return localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart))
    }
    removeStorage(shoppingCart: ShoppingCart) {
        return localStorage.removeItem('shoppingCart')
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
        this.setStorage(this.shoppingCart);
    }

    removeItem(book: Book) {
        const shoppingCart = new ShoppingCart();
        let findItem = this.shoppingCart.items.find((p) => p.productId == book._id);
        if (findItem) {
            let findIndex = this.shoppingCart.items.findIndex((i) => i.productId == book._id);
            this.shoppingCart.items[findIndex].quantity = 0;
            shoppingCart.items = this.shoppingCart.items.filter((b) => b.quantity > 0);

            console.log(`remove item ${book.title}`);
        } else {
            console.log('item is not add before');
        }
        this.shoppingCart.items = shoppingCart.items;
        this.setStorage(this.shoppingCart);
    }

    calculateTotal() {
        this.bookService.getBooks()
            .subscribe(books => this.books = books);
        let total = 0;
        for (let i = 0; i < this.shoppingCart.items.length; i++) {
            let findItem = this.books.find((p) => p._id == this.shoppingCart.items[i].productId);
            total += this.shoppingCart.items[i].quantity * findItem.sellingPrice;
        }
        this.shoppingCart.total = total;
        this.setStorage(this.shoppingCart)
        console.log(JSON.parse(this.getStorage()).total);
        console.log('service')
    }

}