import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AuthpagesRoutingModule } from './authpages-routing.module';
import { AuthpagesComponent } from './authpages/authpages.component';
import {ProfileComponent} from './profile/profile.component';
import {CoreModule} from '../core/core.module';
import {
  MatButtonModule,
  MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatIconModule,
  MatInputModule, MatListModule,
  MatRadioModule, MatSelectModule,
  MatSidenavModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { CreateRideComponent } from './create-ride/create-ride.component';
import {CarsComponent} from './cars/cars.component';
import { CardetailsComponent } from './cardetails/cardetails.component';
import { AuthSearchRideComponent } from './auth-search-ride/auth-search-ride.component';
import {ImageUploadComponent} from './image-upload/image-upload.component';
import { MyridesComponent } from './myrides/myrides.component';
import { ApplyComponent } from './apply/apply.component';

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
    MatListModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  declarations: [
    AuthpagesComponent,
    ProfileComponent,
    CreateRideComponent,
    CarsComponent,
    CardetailsComponent,
    AuthSearchRideComponent,
    ImageUploadComponent,
    MyridesComponent,
    ApplyComponent
  ]
})
export class AuthpagesModule { }
