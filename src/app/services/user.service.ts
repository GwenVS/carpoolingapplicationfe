import { Injectable } from '@angular/core';
import {JwtHelper} from "angular2-jwt";
import {TOKEN_NAME} from "./auth.constant";

@Injectable()
export class UserService {
  jwtHelper: JwtHelper = new JwtHelper();
  accessToken: string;
  isAdmin: boolean;

  constructor() { }

  login(accessToken: string) {
    const decodedToken = this.jwtHelper.decodeToken(accessToken);
    this.accessToken = accessToken;
    sessionStorage.setItem(TOKEN_NAME, accessToken);
  }

  logout() {
    this.accessToken = null;
    this.isAdmin = false;
    sessionStorage.removeItem(TOKEN_NAME);
    sessionStorage.clear();
  }

  isAdminUser(): boolean {
    return this.isAdmin;
  }

  isUser(): boolean {
    return this.accessToken && !this.isAdmin;
  }

}
