import { Injectable } from "@angular/core";
import { Component, OnInit } from '@angular/core';
import { StorageService } from "./storage.service";
import { observableToBeFn } from "rxjs/testing/TestScheduler";
import { ShoppingCart } from './shopping-cart';
import { Observable, Observer, } from 'rxjs';
import { Book } from './book';
import { CartItem } from "./cart-item";
import { BookService } from "./book.service";
import { DeliveryOptions } from "./delivery-options";
import { catchError, map, tap, find } from 'rxjs/operators';
const CART_KEY = "cart";

@Injectable()

export class ShoppingCartService implements OnInit {
  private storage : Storage;
  private subsciptionObservable: Observable<ShoppingCart>;
  private subscribers: Array<Observer<ShoppingCart>> = new Array<Observer<ShoppingCart>>()
  private books: Book[];
  private deliveryOptions: DeliveryOptions[];

  public constructor (
    private storageService : StorageService,
    private bookService: BookService
  ) {
    this.storage = this.storageService.get();
      this.subsciptionObservable = new Observable<ShoppingCart>((observer: Observer<ShoppingCart>) => {
        this.subscribers.push(observer);
        observer.next(this.retrieve());
        return () => {
          this.subscribers = this.subscribers.filter((obs) => obs !== observer );
        };
      }
    )
  }

 ngOnInit() {
   this.getBooks();

  }

  getBooks():void {
    this.bookService.getBooks()
    .subscribe( books => this.books = books.slice(1,5) );
  }

  public get(): Observable<ShoppingCart> {
    return this.subsciptionObservable;
  }

  private retrieve(): ShoppingCart {
    const cart = new ShoppingCart();
    const storedCart = this.storage.getItem(CART_KEY);
    if ( storedCart ) {
      cart.updateFrom(JSON.parse(storedCart));
    }
    return cart;
  }

  public addItem(book: Book, quantity: number):void {
    const cart = this.retrieve();
    let item = cart.items.find((p) => p.productId === book._id );
    if ( item === undefined ) {
      item = new CartItem();
      item.productId = book._id;
      cart.items.push(item);
    }
    item.quantity += quantity;
    cart.items = cart.items.filter((cartItem) => cartItem.quantity > 0 );
    if ( cart.items.length === 0) {
      cart.deliveryOptionId = undefined;
    }
    this.calculateCart(cart);
    this.save(cart);
    this.dispatch(cart);

  }

  private calculateCart(cart:ShoppingCart):void {
    cart.itemsTotal = cart.items
                          .map((item) => item.quantity * this.books.find((p) => p._id === item.productId ).sellingPrice )
                          .reduce((previous, current) => previous + current, 0 );
    cart.deliveryTotal = cart.deliveryOptionId ?
                          this.deliveryOptions.find((x) => x.id === cart.deliveryOptionId ).priceDelivery :0;
    cart.grossTotal = cart.itemsTotal + cart.deliveryTotal;
  }

  private save(cart:ShoppingCart): void {
    this.storage.setItem(CART_KEY, JSON.stringify(cart));
  }


  private dispatch(cart:ShoppingCart): void {
    this.subscribers
        .forEach((sub) => {
          try {
            sub.next(cart);
          } catch (e) {
            // we want all subscribers to get the update even if one errors.
          }
        } )
  }

}
