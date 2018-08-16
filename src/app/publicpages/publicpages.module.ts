import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicpagesRoutingModule } from './publicpages-routing.module';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatInputModule,
  MatRadioModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginFormComponent} from './login-form/login-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {SearchRideComponent} from './search-ride/search-ride.component';
import {PublicpagesComponent} from './publicpages/publicpages.component';

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
    PublicpagesRoutingModule,
  ],
  declarations: [
    PublicpagesComponent,
    LoginFormComponent,
    SignupFormComponent,
    SearchRideComponent
  ]
})
export class PublicpagesModule { }
