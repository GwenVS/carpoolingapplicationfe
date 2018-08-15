import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthpagesRoutingModule } from './authpages-routing.module';
import { AuthpagesComponent } from './authpages/authpages.component';
import {ProfileComponent} from './profile/profile.component';
import {MainComponent} from '../containers/main/main.component';
import {CoreModule} from '../containers/core/core.module';
import {MatButtonModule, MatButtonToggleModule, MatInputModule, MatRadioModule, MatToolbarModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AuthpagesRoutingModule,
    //CoreModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatRadioModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    AuthpagesComponent,
    ProfileComponent,
    MainComponent
  ]
})
export class AuthpagesModule { }
