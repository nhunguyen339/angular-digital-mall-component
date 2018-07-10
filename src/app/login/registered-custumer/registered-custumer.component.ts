// import { Component, OnInit } from '@angular/core';
// import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { first } from 'rxjs/operators';
// import { AuthenticationService } from '../../models/login-logout/authentication.service';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../models/login-logout/authentication.service';
import { LoginStatusService } from '../../models/login-logout/login-status.service';
@Component({
  selector: 'app-registered-custumer',
  templateUrl: './registered-custumer.component.html',
  styleUrls: ['./registered-custumer.component.css']
})
  export class RegisteredCustumerComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private loginStatusService: LoginStatusService
    ) {

    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/account';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit(): void {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.loginStatusService.setStatus(true);
                    console.log('login set status')
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.error = error;
                    this.loading = false;
                },
        );
    }

}
