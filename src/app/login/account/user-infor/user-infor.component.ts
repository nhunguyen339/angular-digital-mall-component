import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Order } from '../../../models/cart/order';
import { User } from '../../../models/login-logout/user';
import { UserService } from '../../../models/login-logout/user.service';
import { AuthenticationService } from '../../../models/login-logout/authentication.service';
import { LoginStatusService } from '../../../models/login-logout/login-status.service';
import { OrderService } from '../../../models/cart/order.service';

@Component({
  selector: 'app-user-infor',
  templateUrl: './user-infor.component.html',
  styleUrls: ['./user-infor.component.css']
})
export class UserInforComponent implements OnInit {

  ordersCurrent: Order[];
  currentUser: User = new User();
  status : Boolean = false;
  statusUser: Boolean;
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
        this.currentUser = JSON.parse(localStorage.getItem('_currentUser'));
        console.log(this.status);
        // this.getUser();
      }
    );
   }

  ngOnInit() {
    this.checkToken();
  }
  logout(): void {
    this.authenticationService.logout();
    this.loginStatusService.setStatus(false);
    console.log('logout')
  }
  getUser():void {
    this.userService.getAll().pipe(first()).subscribe(_ =>
      this.currentUser = _.user)
  }
  checkToken() {
    if ( localStorage.getItem('_currentUser')) {
      this.statusUser = true;
      this.loginStatusService.setStatus(this.statusUser);
      this.getUser();
    } else {
      this.loginStatusService.setStatus(this.statusUser);
    }
    console.log('check')
  }


 
}
