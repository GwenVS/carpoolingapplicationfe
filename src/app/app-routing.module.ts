import {NgModule} from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import {CallbackComponent} from './pages/callback/callback.component';
import {AuthGuard} from './services/auth.guard';

const routes: Routes = [{
  path: 'pages',
  loadChildren: 'app/pages/pages.module#PagesModule',
  canActivate: [AuthGuard]
}, {
  path: 'callback',
  component: CallbackComponent
}, {
  path: '',
  redirectTo: 'pages/dashboard',
  canActivate: [AuthGuard],
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: 'pages/dashboard',
  canActivate: [AuthGuard],
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
