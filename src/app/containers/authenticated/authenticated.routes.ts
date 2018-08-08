import {RouterModule, Routes} from '@angular/router';
import {AuthenticatedComponent} from './authenticated.component';
import {DashboardCrmComponent} from '../../authenticated-pages/dashboard-crm/dashboard-crm.component';
import {ProfileComponent} from '../../authenticated-pages/profile/profile.component';
import {NgModule} from '@angular/core';

export const authenticatedRoutes: Routes = [{
  path: '', component: AuthenticatedComponent, children: [
    {path: 'dashboard', component: DashboardCrmComponent},
    /*{path: 'tables', loadChildren: '../tables/tables.module#TablesModule'},
    {path: 'maps', loadChildren: '../maps/maps.module#MapsModule'},*/
    {path: 'profile', component: ProfileComponent},
    {path: '**', redirectTo: 'dashboard'},
  ]
}];
@NgModule({
  imports: [
    RouterModule.forChild(authenticatedRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthenticatedPagesRouterModule {
}
