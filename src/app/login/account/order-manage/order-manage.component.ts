import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../models/cart/order.service';
import { LoginStatusService } from '../../../models/login-logout/login-status.service';
import { User } from '../../../models/login-logout/user';
import { UserService } from '../../../models/login-logout/user.service';
import { first } from 'rxjs/operators';
import { Order, BOOK, _Book, _User } from '../../../models/cart/order';

@Component({
  selector: 'app-order-manage',
  templateUrl: './order-manage.component.html',
  styleUrls: ['./order-manage.component.css']
})
export class OrderManageComponent implements OnInit {
  orders: Order[] = new Array<Order>();
  books = new Array<BOOK>();
  _book = new _Book();
  _user = new _User();
  currentUser = new User();
  status: Boolean;
  statusUser = false;
  constructor(
    private orderService: OrderService,
    private loginStatusService: LoginStatusService,
    private userService: UserService,
  ) {
    loginStatusService.status$.subscribe(
      status => {
        this.status = status;
        if (status) {
          this.getUser()
        }
        this.currentUser = JSON.parse(localStorage.getItem('_currentUser'));
        console.log(this.status);
        // this.getUser();
        console.log('const')
      }
    );
  }

  ngOnInit() {
    this.orders = new Array<Order>();
    // this.orders[1].books[1]._book.title;
    this.books = new Array<BOOK>();
    this._book = new _Book();
    this._user = new _User();
    this.checkToken();
    this.getOrders();
    console.log()
  }
  getUser(): void {
    this.userService.getAll().subscribe(_ => this.currentUser = _.user)
  };

  checkToken() {
    if (localStorage.getItem('_currentUser')) {
      this.statusUser = true;
      this.loginStatusService.setStatus(this.statusUser);
      this.getUser();
    } else {
      this.loginStatusService.setStatus(this.statusUser);
    }
    console.log('check');
    console.log(this.currentUser)
  }

  //get order of _id User
  getOrders() {
    if (this.currentUser) {
      this.orders = new Array<Order>();
    this.books = new Array<BOOK>();
    this._book = new _Book();
    this._user = new _User();
    this.orderService.getOrders().subscribe(
      _ => this.orders = _
    )
    }
    console.log(this.orders)
  }


}
