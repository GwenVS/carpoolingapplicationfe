import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthpagesComponent} from './authpages/authpages.component';
import {ProfileComponent} from './profile/profile.component';
import {CreateRideComponent} from './create-ride/create-ride.component';
import {CarsComponent} from '../shared/cars/cars.component';

const routes: Routes = [{
  path: '', component: AuthpagesComponent, children: [
    //{ path: 'dashboard', loadChildren: '../dashboard-crm/dashboard-crm.module#DashboardCrmModule' }
    { path: 'profile', component: ProfileComponent},
    { path: 'createride', component: CreateRideComponent},
    {path: '**', redirectTo: 'createride'},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthpagesRoutingModule { }
