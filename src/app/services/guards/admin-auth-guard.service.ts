import {Injectable, state} from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {UserService} from '../user.service';


@Injectable()
export class AdminAuthGuardService implements CanActivate{

  constructor(private router: Router, private userService: UserService) {}

  canActivate(): boolean {
    const isAdmin = this.userService.isAdminUser();
    if (isAdmin) {
      return true;
    } else {
      this.router.navigateByUrl('pages/login');
      return false;
    }
  }


}
