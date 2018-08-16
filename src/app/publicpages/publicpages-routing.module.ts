import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchRideComponent} from './search-ride/search-ride.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {PublicpagesComponent} from './publicpages/publicpages.component';

const routes: Routes = [{
  path: '', component: PublicpagesComponent, children: [
    {path: 'login', component: LoginFormComponent},
    {path: 'signup', component: SignupFormComponent},
    {path: 'ride', component: SearchRideComponent},
    {path: '**', component: SearchRideComponent},
    {path: '', component: SearchRideComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicpagesRoutingModule {
}
