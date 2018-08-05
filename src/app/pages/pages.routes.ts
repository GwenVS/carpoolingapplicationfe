import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component';

const pagesRoutes: Routes = [
  {path: 'contact', component: ContactComponent, data: {animation: 'contact'}},
  {path: 'about', component: AboutComponent, data: {animation: 'about'}},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(pagesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRouterModule {
}
