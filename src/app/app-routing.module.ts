import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainComponent} from './containers/main/main.component';

export const routes: Routes = [
  {path: 'pages', loadChildren: './publicpages/publicpages.module#PublicpagesModule'},
  {path: 'main', component: MainComponent},
  {path: 'auth', loadChildren: './authpages/authpages.module#AuthpagesModule'},
  {path: '**', redirectTo: 'pages'},
  {path: '', redirectTo: 'pages', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
