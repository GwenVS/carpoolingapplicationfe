import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {LoginUser} from "../models/loginUser";
import {TOKEN_NAME, USERNAME} from "./auth.constant";
import {tokenNotExpired} from 'angular2-jwt';
import {UserService} from './user.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RegisterUser} from '../models/RegisterUser';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthService {
  static AUTH_URL = '/server/api/public/login';

  private _error;
  private _registrationComplete = false;

  constructor(private http: HttpClient, private userService: UserService) {
  }

  checkCredentials(loginUser: LoginUser) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + TOKEN_NAME
      })
    };
    sessionStorage.setItem(USERNAME, loginUser.username);
    return this.http.post(AuthService.AUTH_URL, loginUser, httpOptions)
      .map((res: any) => {
        if (res.access_token) {
          return res.access_token;
        }
        return null;
      });
  }

  isAuthenticated() {
    if (tokenNotExpired(TOKEN_NAME, this.userService.accessToken)) {
      return true;
    } else {
      return false;
    }
  }


  doRegister(registerUser: RegisterUser) {
    return this.http.post('/server/api/public/register', registerUser).pipe(
      tap((regUser: RegisterUser) => this.registrationComplete = true)
    );
  }

  get error() {
    return this._error;
  }

  get registrationComplete(): boolean {
    return this._registrationComplete;
  }

  set registrationComplete(value: boolean) {
    this._registrationComplete = value;
  }
}
