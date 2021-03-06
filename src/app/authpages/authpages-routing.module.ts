import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthpagesComponent} from './authpages/authpages.component';
import {ProfileComponent} from './profile/profile.component';
import {CreateRideComponent} from './create-ride/create-ride.component';
import {AuthSearchRideComponent} from './auth-search-ride/auth-search-ride.component';
import {MyridesComponent} from './myrides/myrides.component';
import {ApplyComponent} from './apply/apply.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '', component: AuthpagesComponent, children: [
    { path: 'dashboard', component: DashboardComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'createride', component: CreateRideComponent},
    {path: 'findride', component: AuthSearchRideComponent},
    {path: 'myrides', component: MyridesComponent},
    {path: 'apply/:id', component: ApplyComponent},
    {path: '**', redirectTo: 'createride'},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthpagesRoutingModule { }
