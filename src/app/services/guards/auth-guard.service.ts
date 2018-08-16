import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {UserService} from "../user.service";
import {tokenNotExpired} from "angular2-jwt";
import {TOKEN_NAME} from '../auth.constant';


@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private router: Router, private userService: UserService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (tokenNotExpired(TOKEN_NAME, this.userService.accessToken)) {
      return true;
    } else {
      this.router.navigateByUrl('pages/login', {queryParams: {redirectTo: state.url}});
      return false;
    }
  }
}
