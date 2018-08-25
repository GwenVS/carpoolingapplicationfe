import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RideService} from '../../services/ride.service';
import {Ride} from '../../models/ride';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  loggedIn= true;
  ride: Ride;

  constructor( private route: ActivatedRoute, private rideService : RideService) { }

  ngOnInit() {
    this.getRide();
  }

  getRide() : void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.rideService.getRideById(id).subscribe(ride => this.ride = ride);
  }
}
