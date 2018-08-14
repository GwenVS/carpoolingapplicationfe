import {Routes} from "@angular/router";
import {LoginComponent} from "./containers/login/login.component";
import {MainComponent} from "./containers/main/main.component";
import {SessionSetupComponent} from "./components/session-setup/session-setup.component";

export const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainComponent},
  {path: 'settings', component: SessionSetupComponent},
  {path: '**', redirectTo: '/login'}
];


