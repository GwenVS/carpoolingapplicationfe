import { Component, OnInit } from '@angular/core';
import {HttpLoginServiceService} from '../../services/http-login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm = false;
  searchride = true;
  signupForm = false;

  public service: HttpLoginServiceService;

  constructor(service: HttpLoginServiceService){
    this.service = service;
  }

  clickLoginForm() {
    this.loginForm = true;
    this.searchride = false;
    this.signupForm = false;
  }

  clickSearchRide() {
    this.loginForm = false;
    this.searchride = true;
    this.signupForm = false;
  }

  clickSignUpForm() {
    this.service.registrationComplete = false;
    this.loginForm = false;
    this.searchride = false;
    this.signupForm = true;
  }

  ngOnInit() {
  }

}
