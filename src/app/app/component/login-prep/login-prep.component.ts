import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginPrepService } from './services/login-prep.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login-prep',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login-prep.component.html',
  styleUrl: './login-prep.component.scss',
})
export class LoginPrepComponent implements OnInit {
  loginForm: FormGroup | undefined;
  hasError = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginPreService: LoginPrepService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control(''),
      password: this.formBuilder.control(''),
    });
  }

  async login() {
    const loggedIn = this.loginPreService.loginByEmail(
      this.loginForm?.controls['email'].value,
      this.loginForm?.controls['password'].value,
    );
    if (loggedIn) {
      this.hasError = false;
      await this.router.navigate(['dashboard']);
    }
    this.hasError = true;
  }
}
