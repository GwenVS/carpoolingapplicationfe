import {Component, OnInit} from '@angular/core';
import {AnalyticsService} from './@core/utils/analytics.service';

@Component({
  selector: 'app-app',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private analytics: AnalyticsService) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }
}
