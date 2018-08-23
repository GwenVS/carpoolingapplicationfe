import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicpagesRoutingModule } from './publicpages-routing.module';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatInputModule, MatListModule,
  MatRadioModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginFormComponent} from './login-form/login-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {PublicpagesComponent} from './publicpages/publicpages.component';
import { PublicSearchRideComponent } from './public-search-ride/public-search-ride.component';
import {SharedModule} from '../shared/shared.module';

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
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    PublicpagesRoutingModule,
    SharedModule
  ],
  declarations: [
    PublicpagesComponent,
    LoginFormComponent,
    SignupFormComponent,
    PublicSearchRideComponent
  ]
})
export class PublicpagesModule { }
