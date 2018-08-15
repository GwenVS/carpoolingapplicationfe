import {Routes} from "@angular/router";
import {MainComponent} from "./containers/main/main.component";

export const routes: Routes = [
  {path: 'login', loadChildren: './publicpages/login/login.module#LoginModule'},
  {path: 'main', component: MainComponent},
  {path: '**', redirectTo: 'login'},
  {path: '', redirectTo: 'login', pathMatch:'full'}
];


