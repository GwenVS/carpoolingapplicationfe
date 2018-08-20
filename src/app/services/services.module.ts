import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthService} from './auth.service';
import {AppDataService} from './app-data.service';
import {HttpLoginServiceService} from './http-login-service.service';
import {UserService} from './user.service';
import {AuthGuardService} from './guards/auth-guard.service';
import {RideService} from './ride.service';
import {CarService} from './car.service';

const SERVICES = [
  AppDataService,
  AuthService,
  HttpLoginServiceService,
  UserService,
  AuthGuardService,
  RideService,
  CarService
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class ServicesModule {
}
