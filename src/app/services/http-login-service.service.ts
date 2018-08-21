import { Injectable } from '@angular/core';
import {tap} from "rxjs/operators";
import {RegisterUser} from "../models/RegisterUser";
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable()
export class HttpLoginServiceService {
  private _error;
  private _registrationComplete = false;

  constructor(private http: HttpClient) { }

  doRegister(registerUser: RegisterUser) {
    const url = '/server/api/public/register';
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
