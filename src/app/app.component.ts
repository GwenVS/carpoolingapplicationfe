import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-app',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  title = 'Carpoolers';
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.handleAuthentication();
  }


  getRouteAnimation(outlet) {

    return outlet.activatedRouteData.animation;
  }
}
