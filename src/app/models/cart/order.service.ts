import { Injectable, OnInit } from "@angular/core";
import { ShoppingCart } from "./shopping-cart";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from "./order";
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-type' : 'application/json' })
  }
  
@Injectable()
export class OrderService implements OnInit {
    ordersUrl = 'http://green-web-bookshop.herokuapp.com/api/orders'
    constructor(private http : HttpClient) {
      
    }
    ngOnInit() {
    }

    addOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(this.ordersUrl , order, httpOptions)
    }
    getOrders(): Observable<Order[]> {
        return this.http.get<Order[]>(this.ordersUrl)
    }
}