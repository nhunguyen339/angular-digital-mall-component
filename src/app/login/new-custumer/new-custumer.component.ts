import { Component, OnInit } from '@angular/core';
import { UserService } from '../../models/login-logout/user.service';
import { User } from '../../models/login-logout/user';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-new-custumer',
  templateUrl: './new-custumer.component.html',
  styleUrls: ['./new-custumer.component.css']
})
export class NewCustumerComponent implements OnInit {
  submitted = false;
  newUser : User;
  userForm : FormGroup;
  loading = false;
  error 
  // infoSign : InfoSign;

  constructor(
    private formBuilder : FormBuilder,
    private userService : UserService,
    private router : Router,
  ) { }

  ngOnInit() {



    this.newUser = new User();
    this.newUser.email = '';
    this.newUser.password = '';
    this.newUser.last = '';
    this.newUser.first = '';
    this.newUser.phone = 0;

    // ======formGroup==
    // this.userForm = new FormGroup({
    //   'email': new FormControl(this.newUser.email, Validators.required),
    //   'password': new FormControl(this.newUser.password, Validators.required),
    //   'last': new FormControl(this.newUser.last),
    //   'first': new FormControl(this.newUser.first),
    //   'phone': new FormControl(this.newUser.phone)
    // })

    this.userForm = this.formBuilder.group(
      {
        email : [this.newUser.email, Validators.required],
        password : [this.newUser.password, Validators.required],
        last : [this.newUser.last],
        first : [this.newUser.first],

        phone : [this.newUser.phone]
      }
    )

  }

  get newUserControl() { return this.userForm.controls }

  onSubmit():void {
    // thay cho ngModel
    this.submitted = true;
    this.newUser.email = this.userForm.value.email;
    this.newUser.password = this.userForm.value.password;
    this.newUser.last = this.userForm.value.last;
    this.newUser.first = this.userForm.value.first;
    this.newUser.phone = this.userForm.value.phone;

  }


  
  successLogin(): void {
    this.router.navigate(['/success-login'])
  }



}
