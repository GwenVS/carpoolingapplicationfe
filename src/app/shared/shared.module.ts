import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatExpansionModule, MatListModule, MatToolbarModule} from '@angular/material';
import {SearchRideComponent} from './search-ride/search-ride.component';
import {RidesComponent} from './rides/rides.component';
import {RidedetailsComponent} from './ridedetails/ridedetails.component';
import {RouterModule} from '@angular/router';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    RouterModule,
    MatExpansionModule,
    AgmCoreModule.forRoot({
      //todo: mykey
      apiKey: 'AIzaSyAXTJwhYqJ6Pc7VXGRMTv40N1WRLqzuSNs'
    }),
  ],
  declarations: [
    SearchRideComponent,
    RidesComponent,
    RidedetailsComponent,
    GooglemapComponent
  ],
  exports: [
    SearchRideComponent,
    RidesComponent,
    RidedetailsComponent,
    GooglemapComponent
  ]
})

export class SharedModule {

}
