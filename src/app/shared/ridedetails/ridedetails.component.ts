import {Component, Input, OnInit} from '@angular/core';
import {Ride} from '../../models/ride';
import {RideService} from '../../services/ride.service';

@Component({
  selector: 'app-ridedetails',
  templateUrl: './ridedetails.component.html',
  styleUrls: ['./ridedetails.component.scss']
})
export class RidedetailsComponent implements OnInit {

  @Input() ride: Ride;
  @Input() loggedIn;
  @Input() searchRides;

  constructor(private rideService: RideService) { }

  ngOnInit() {
  }

  applyForRide() {

  }

  loginClick() {

  }
}
