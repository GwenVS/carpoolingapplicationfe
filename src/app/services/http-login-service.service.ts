import { Injectable } from '@angular/core';
import {tap} from "rxjs/operators";
import {RegisterUser} from "../model/RegisterUser";
import {TOKEN_NAME, USERNAME} from "./auth.constant";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {serverUrl} from '../../environments/environment';


@Injectable()
export class HttpLoginServiceService {
  private baseURL = '/api/public';
  private springURL = serverUrl + this.baseURL;
  private _error;
  private _registrationComplete = false;

  constructor(private http: HttpClient) { }

  doRegister(registerUser: RegisterUser) {
    const url = this.springURL + '/register';
    const headers = new HttpHeaders({
      "Content-type": "multipart/form-data; boundry=pleaseJustWork",
    });
    return this.http.post(url, registerUser).pipe(
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
