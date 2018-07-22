import {Component, OnInit} from '@angular/core';
import {AnalyticsService} from './@core/utils/analytics.service';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-app',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private analytics: AnalyticsService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.authService.handleAuthentication();
  }
}
