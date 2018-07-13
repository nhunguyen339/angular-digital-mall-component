import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../../models/login-logout/user';
import { UserService } from '../../models/login-logout/user.service';
import { AuthenticationService } from '../../models/login-logout/authentication.service';
import { LoginStatusService } from '../../models/login-logout/login-status.service';
import { OrderService } from '../../models/cart/order.service';
import { Order } from '../../models/cart/order';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  ordersCurrent: Order[];
  userNew: User = new User();
  status : Boolean = false
  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private loginStatusService : LoginStatusService,
    private orderService: OrderService
  ) {
    loginStatusService.status$.subscribe(
      status => {
        this.status = status;
        if (status) {
          this.getUser()
        }
        this.userNew = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.status);
        // this.getUser();
      }
    );
   }

  ngOnInit() {
    this.getUser();
    this.getOrders();
  }
  logout(): void {
    this.authenticationService.logout();
    this.loginStatusService.setStatus(false);
    console.log('logout')
  }
  getUser():void {
    this.userService.getAll().pipe(first()).subscribe(_ =>
      this.userNew = _.user)
  }
  getOrders():void {
    this.orderService.getOrders().subscribe(
      _ => this.ordersCurrent = _
    )
    console.log(this.ordersCurrent)
  }

}
