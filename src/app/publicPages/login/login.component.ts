import { Component, OnInit } from '@angular/core';
import {HttpLoginServiceService} from '../../services/http-login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm = false;
  public service: HttpLoginServiceService;

  constructor(service: HttpLoginServiceService){
    this.service = service;
  }

  clickLoginForm() {
    this.loginForm = true;
  }

  clickSignUpForm() {
    this.service.registrationComplete = false;
    this.loginForm = false;
  }

  ngOnInit() {
  }

}
