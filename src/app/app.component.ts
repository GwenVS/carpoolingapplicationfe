import { Component } from '@angular/core';
import {AnalyticsService} from './@core/utils/analytics.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'app';
  constructor(private analytics: AnalyticsService) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }
}
