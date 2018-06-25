import { Component, OnInit } from '@angular/core';
import { User } from '../models/login-logout/user';
import { UserService } from '../models/login-logout/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  userNew : User = new User();
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getAll().pipe(first()).subscribe(_ =>
    this.userNew = _.user)
  }

}
