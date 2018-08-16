import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthService} from './auth.service';
import {AppDataService} from './app-data.service';
import {HttpLoginServiceService} from './http-login-service.service';
import {UserService} from './user.service';
import {AuthGuardService} from './guards/auth-guard.service';
import {RideService} from './ride.service';

const SERVICES = [
  AppDataService,
  AuthService,
  HttpLoginServiceService,
  UserService,
  AuthGuardService,
  RideService
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
