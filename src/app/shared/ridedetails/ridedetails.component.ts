import {Component, Input, OnInit} from '@angular/core';
import {Ride} from '../../models/ride';
import {RideService} from '../../services/ride.service';
import {USERNAME} from '../../services/auth.constant';

@Component({
  selector: 'app-ridedetails',
  templateUrl: './ridedetails.component.html',
  styleUrls: ['./ridedetails.component.scss']
})
export class RidedetailsComponent implements OnInit {

  @Input() ride: Ride;
  @Input() loggedIn;
  @Input() searchRides;
  isCreator = false;
  validMessage='';

  constructor(private rideService: RideService) { }

  ngOnInit() {
    if(this.ride.userRideInfos.findIndex(uri=>uri.user.username === sessionStorage.getItem(USERNAME) && uri.isDriver === true) !== -1) {
      this.isCreator = true;
    }
  }

  deleteRide() {
    this.rideService.deleteRide(this.ride).subscribe(data => {
      this.validMessage = 'Succesfully deleted!'
    })
  }
}
