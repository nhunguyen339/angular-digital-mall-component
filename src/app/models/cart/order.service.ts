import { Injectable, OnInit } from "@angular/core";
import { ShoppingCart } from "./shopping-cart";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from "./order";
import { Observable } from 'rxjs';
import { User } from "../login-logout/user";
import { UserService } from "../login-logout/user.service";
import { first } from "rxjs/operators";
import { LoginStatusService } from "../login-logout/login-status.service";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
}

@Injectable()
export class OrderService implements OnInit {
    ordersUrl = 'http://green-web-bookshop.herokuapp.com/api/orders';
    currentUser = new User();
    statusUser = false;
    constructor(
        private http: HttpClient,
        private userService: UserService,
        private loginStatusService: LoginStatusService,
    ) {
    }
    ngOnInit() {
        this.checkToken();
        console.log(this.currentUser)
    }
    getUser(): void {
        this.userService.getAll().pipe(first()).subscribe(_ => this.currentUser = _.user)
    };
    checkToken() {
        if (localStorage.getItem('_currentUser')) {
            this.statusUser = true;
            this.loginStatusService.setStatus(this.statusUser);
            this.getUser();
        } else {
            this.loginStatusService.setStatus(this.statusUser);
        }
        console.log(this.currentUser._id)
    }
    addOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(this.ordersUrl, order, httpOptions)
    }
    getOrders(): Observable<Order[]> {
        this.checkToken(); 
        if (localStorage.getItem('_currentUser')) {
            this.statusUser = true;
            this.loginStatusService.setStatus(this.statusUser);
            this.getUser();
        } else {
            this.loginStatusService.setStatus(this.statusUser);
        } 
        this.currentUser = JSON.parse(localStorage.getItem('_currentUser'));
        const url = `${this.ordersUrl}/user/${this.currentUser._id}`
        return this.http.get<Order[]>(url)
    }
    getOrder(id: string): Observable<Order> {
        const url = `${this.ordersUrl}/${id}`;
        return this.http.get<Order>(url)
    }
}