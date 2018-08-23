import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Ride} from '../../models/ride';
import {RideService} from '../../services/ride.service';

@Component({
  selector: 'app-search-ride',
  templateUrl: './search-ride.component.html',
  styleUrls: ['./search-ride.component.scss']
})
export class SearchRideComponent implements OnInit {

  rides : Ride[];

  constructor(private rideService : RideService) { }

  ngOnInit() {
    this.getRides()
  }

  getRides(){
    this.rideService.getRides().subscribe(data => {
      this.rides = data
    })
  }
}
