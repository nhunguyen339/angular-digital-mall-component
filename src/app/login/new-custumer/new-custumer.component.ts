import { Component, OnInit } from '@angular/core';
import { UserService } from '../../models/login-logout/user.service';
import { User } from '../../models/login-logout/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-custumer',
  templateUrl: './new-custumer.component.html',
  styleUrls: ['./new-custumer.component.css']
})
export class NewCustumerComponent implements OnInit {

  newUser : User;
  userForm : FormGroup;
  loading = false;

  constructor(
    private userService : UserService,
  ) { }

  ngOnInit() {

    this.newUser = new User();
    this.newUser.email = '';
    this.newUser.password = '';
    this.newUser.last = '';
    this.newUser.first = '';
    this.newUser.phone = 0;

    // ======formGroup==
    this.userForm = new FormGroup({
      'email': new FormControl(this.newUser.email, Validators.required),
      'password': new FormControl(this.newUser.password, Validators.required),
      'last': new FormControl(this.newUser.last),
      'first': new FormControl(this.newUser.first),
      'phone': new FormControl(this.newUser.phone)
    })

  }

  get getEmail() { return this.userForm.get('email') };
  get getPassword() { return this.userForm.get('password') };

  onSubmit():void {
    // thay cho ngModel
    this.newUser.email = this.userForm.value.email;
    this.newUser.password = this.userForm.value.password;
    this.newUser.last = this.userForm.value.last;
    this.newUser.first = this.userForm.value.first;
    this.newUser.phone = this.userForm.value.phone;
    this.createUser();

  }


  createUser():void {
    this.loading = true;
    this.userService.createUser(this.newUser)
      .subscribe(
        error => {
          this.loading = false;
      });
  }

}
