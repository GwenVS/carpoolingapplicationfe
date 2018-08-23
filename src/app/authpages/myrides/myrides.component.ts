import {Component, OnInit} from '@angular/core';
import {Ride} from '../../models/ride';
import {RideService} from '../../services/ride.service';

@Component({
  selector: 'app-myrides',
  templateUrl: './myrides.component.html',
  styleUrls: ['./myrides.component.scss']
})
export class MyridesComponent implements OnInit {

  rides: Ride[];

  constructor(private rideService: RideService) {
  }

  ngOnInit() {
    this.getRides();
  }

  getRides() {
    this.rideService.getRidesByUser().subscribe(data => {
      this.rides = data;
    });
  }
}
