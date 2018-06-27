import { Component, OnInit } from '@angular/core';
import { User } from '../../models/login-logout/user';
import { UserService } from '../../models/login-logout/user.service';
import { AuthenticationService } from '../../models/login-logout/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-success-login',
  templateUrl: './success-login.component.html',
  styleUrls: ['./success-login.component.css']
})
export class SuccessLoginComponent implements OnInit {
  userNew: User = new User();
  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.getUser();
  }
  logout(): void {
    this.authenticationService.logout();
    location.reload();
  }
  getUser():void {
    this.userService.getAll().pipe(first()).subscribe(_ =>
      this.userNew = _.user)
  }

}
