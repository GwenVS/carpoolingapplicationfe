import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StateService} from './state.service';
import {SmartTableService} from './smart-table.service';
import {CarpoolerService} from './carpooler.service';
import {UserService} from './users.service';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';

const SERVICES = [
  UserService,
  StateService,
  SmartTableService,
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
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ServicesModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
