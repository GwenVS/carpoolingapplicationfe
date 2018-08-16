import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainComponent} from './containers/main/main.component';
import {AuthGuardService} from './services/guards/auth-guard.service';

export const routes: Routes = [
  {path: 'pages', loadChildren: './publicpages/publicpages.module#PublicpagesModule'},
  {path: 'main', component: MainComponent},
  {path: 'auth', loadChildren: './authpages/authpages.module#AuthpagesModule',canActivate: [AuthGuardService]},
  {path: '**', redirectTo: 'pages'},
  {path: '', redirectTo: 'pages', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
