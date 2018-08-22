import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AuthpagesRoutingModule } from './authpages-routing.module';
import { AuthpagesComponent } from './authpages/authpages.component';
import {ProfileComponent} from './profile/profile.component';
import {MainComponent} from '../containers/main/main.component';
import {CoreModule} from '../containers/core/core.module';
import {
  MatButtonModule,
  MatButtonToggleModule, MatCardModule, MatIconModule,
  MatInputModule, MatListModule,
  MatRadioModule,
  MatSidenavModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { CreateRideComponent } from './create-ride/create-ride.component';
import {CarsComponent} from './cars/cars.component';
import { CardetailsComponent } from './cardetails/cardetails.component';

@NgModule({
  imports: [
    CommonModule,
    AuthpagesRoutingModule,
    CoreModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatRadioModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatSidenavModule,
    MatCardModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatListModule
  ],
  declarations: [
    AuthpagesComponent,
    ProfileComponent,
    MainComponent,
    CreateRideComponent,
    CarsComponent,
    CardetailsComponent
  ]
})
export class AuthpagesModule { }
