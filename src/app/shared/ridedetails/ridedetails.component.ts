import {Component, Input, OnInit} from '@angular/core';
import {Ride} from '../../models/ride';
import {RideService} from '../../services/ride.service';

@Component({
  selector: 'app-ridedetails',
  templateUrl: './ridedetails.component.html',
  styleUrls: ['./ridedetails.component.css']
})
export class RidedetailsComponent implements OnInit {

  @Input() ride: Ride;

  constructor(private rideService: RideService) { }

  ngOnInit() {
    //todo: remove this and fix json response
      this.rideService.getRideById(this.ride.rideId).subscribe(data =>
      this.ride = data);
  }

}
