import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router'; 
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {LoginFormComponent} from './login-form/login-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {ReactiveFormsModule} from '@angular/forms';
const appRoutes: Routes = [
    { path: '', component: LoginComponent },
]

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild(appRoutes),
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent,
    SignupFormComponent]
})
export class LoginModule { }
