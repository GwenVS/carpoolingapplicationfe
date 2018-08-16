import {Injectable, state} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {UserService} from '../user.service';


@Injectable()
export class AdminAuthGuardService implements CanActivate{

  constructor(private router: Router, private userService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAdmin = this.userService.isAdminUser();
    if (isAdmin) {
      return true;
    } else {
      this.router.navigateByUrl('pages');
      return false;
    }
  }


}
