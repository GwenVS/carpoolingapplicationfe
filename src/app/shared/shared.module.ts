import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageUploadComponent} from '../authpages/image-upload/image-upload.component';
import {MatButtonModule, MatExpansionModule, MatListModule, MatToolbarModule} from '@angular/material';
import {SearchRideComponent} from './search-ride/search-ride.component';
import {RidesComponent} from './rides/rides.component';
import {RidedetailsComponent} from './ridedetails/ridedetails.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    RouterModule,
    MatExpansionModule
  ],
  declarations: [
    SearchRideComponent,
    RidesComponent,
    RidedetailsComponent
  ],
  exports: [
    SearchRideComponent,
    RidesComponent,
    RidedetailsComponent
  ]
})

export class SharedModule {

}
