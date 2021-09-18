import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  showOtpField: boolean = false;

  constructor(

    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthServiceService,
    // private alertService: AlertService
  ) {
    // redirect to home if already logged in

    // if (this.authenticationService.demoCurrentUserValue) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      otp: [0]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSendOtp() {

    this.submitted = true
    if (this.loginForm.invalid) {
      return
    }
    this.loading = true
    this.authenticationService.sendOtp(this.f.username.value).subscribe(
      data => {
        this.showOtpField = true
        this.loading = false
      },
      error => {
        this.loading = false
      }
    )
    this.submitted = false
  }

  onLogin() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.loginUsingOtp(this.f.username.value, this.f.otp.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
          this.showOtpField = false
        },
        error => {
          // this.alertService.error(error);
          this.loading = false;
        });
  }
}







