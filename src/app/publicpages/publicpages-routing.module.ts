import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginFormComponent} from './login-form/login-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {PublicpagesComponent} from './publicpages/publicpages.component';
import {PublicSearchRideComponent} from './public-search-ride/public-search-ride.component';

const routes: Routes = [{
  path: '', component: PublicpagesComponent, children: [
    {path: 'login', component: LoginFormComponent},
    {path: 'signup', component: SignupFormComponent},
    {path: 'ride', component: PublicSearchRideComponent},
    {path: '**', component: PublicSearchRideComponent},
    {path: '', component: PublicSearchRideComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicpagesRoutingModule {
}
