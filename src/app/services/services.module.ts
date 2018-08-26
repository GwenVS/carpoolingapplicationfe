import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthService} from './auth.service';
import {AppDataService} from './app-data.service';
import {UserService} from './user.service';
import {AuthGuardService} from './guards/auth-guard.service';
import {RideService} from './ride.service';
import {CarService} from './car.service';
import {RideRequestService} from './ride-request.service';

const SERVICES = [
  AppDataService,
  AuthService,
  UserService,
  AuthGuardService,
  RideService,
  CarService,
  RideRequestService
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
