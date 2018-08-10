import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticatedComponent} from './authenticated.component';
import {RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule, MatInputModule, MatTabsModule} from '@angular/material';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {AuthenticatedPagesRouterModule, authenticatedRoutes} from './authenticated.routes';
import {CoreModule} from '../core/core.module';
import {DashboardCrmModule} from '../../authenticated-pages/dashboard-crm/dashboard-crm.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ImageUploadComponent} from '../../components/image-upload/image-upload.component';
import {ProfileComponent} from '../../authenticated-pages/profile/profile.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authenticatedRoutes),
    MatToolbarModule,
    DashboardCrmModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    CoreModule,
    MatSidenavModule,
    PerfectScrollbarModule,
    ReactiveFormsModule,
    AuthenticatedPagesRouterModule
  ],
  declarations: [
    AuthenticatedComponent,
    ProfileComponent,
    ImageUploadComponent
  ],
  exports: [ProfileComponent, ImageUploadComponent],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class AuthenticatedModule {
}
