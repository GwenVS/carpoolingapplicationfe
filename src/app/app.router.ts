import {Routes} from "@angular/router";
import {MainComponent} from "./containers/main/main.component";
import {SessionSetupComponent} from "./components/session-setup/session-setup.component";
import {LoginComponent} from './publicPages/login/login.component';
import {AuthGuardService} from './services/guards/auth-guard.service';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainComponent},
  {path: 'settings', component: SessionSetupComponent},
  {path: '**', redirectTo: 'login'},
  {path: '', redirectTo: 'login', pathMatch:'full'}
];


