import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import {
  MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatInputModule,
  MatToolbarModule, MatRadioModule
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {LoginFormComponent} from './login-form/login-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {SearchRideComponent} from '../search-ride/search-ride.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
];
@NgModule({
  imports: [
    MatCardModule,
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatRadioModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent,
    SignupFormComponent,
    SearchRideComponent
  ]
})
export class LoginModule {
}
