import {NgModule} from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import {CallbackComponent} from './pages/callback/callback.component';
import {CarpoolersComponent} from './pages/carpoolers/carpoolers.component';
import {AuthGuard} from './services/auth.guard';

const routes: Routes = [{
  path: 'carpoolers',
  component: CarpoolersComponent,
  canActivate: [AuthGuard]
},  {
  path: 'callback',
  component: CallbackComponent
}, {
  path: '',
  redirectTo: 'auth/dashboard',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
