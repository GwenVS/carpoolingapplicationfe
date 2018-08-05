import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthService} from './auth.service';
import {RideService} from './ride.service';
import {AppDataService} from './app-data.service';
import {HttpLoginServiceService} from './http-login-service.service';
import {UserService} from './user.service';

const SERVICES = [
  AppDataService,
  RideService,
  AuthService,
  HttpLoginServiceService,
  UserService
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
