import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './containers/main/main.component';
import {NgModule} from '@angular/core';
import {SessionSetupComponent} from './components/session-setup/session-setup.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'settings', component: SessionSetupComponent},
  {path: '**', redirectTo: '/login'},
  //{path: '', redirectTo: '/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

