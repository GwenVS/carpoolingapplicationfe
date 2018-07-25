import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CarpoolerService} from './carpooler.service';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';

const SERVICES = [
  CarpoolerService,
  AuthService,
  AuthGuard
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
