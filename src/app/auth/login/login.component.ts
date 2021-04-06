import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  checkValidation(value) {
    const _mail = this.loginForm.get('mail');
    const _password = this.loginForm.get('password');

    if ( value === 'mail') {
      if (_mail.touched && !_mail.valid) {
        if (_mail.errors.required) {
          return 'Mail is required';
        }
        if (_mail.errors.email) {
          return 'Mail format is incorrect';
        }
      }
    } else if ( value === 'password') {
      if (_password.touched && !_password.valid) {
        if (_password.errors.required ) {
          return 'Password is required';
        }
      }
    }
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }

    console.log(this.loginForm.value);
  }

}
