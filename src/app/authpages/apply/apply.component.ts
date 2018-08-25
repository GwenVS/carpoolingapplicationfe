import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RideService} from '../../services/ride.service';
import {Ride} from '../../models/ride';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RideRequest} from '../../models/RideRequest';
import {Car} from '../../models/Car';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  loggedIn= true;
  ride: Ride;
  rideRequest: RideRequest;

  rideRequestForm : FormGroup;

  constructor( private route: ActivatedRoute, private rideService : RideService, private fb: FormBuilder) { }

  ngOnInit() {
    this.rideRequest = new RideRequest();
    this.ride= new Ride();
    this.ride.chosenCar = new Car();
    this.getRide();
    this.buildForm();

  }

  buildForm() {
    this.rideRequestForm = this.fb.group({
      'requestText': new FormControl('', [Validators.maxLength(500)]),
    });
  }

  getRide() : void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.rideService.getRideById(id).subscribe(ride => this.ride = ride);
  }


  clickApply() {
    this.rideService.createRideRequest(this.rideRequest, this.ride.rideId).subscribe(data => {
      console.log(data);
    })
  }
}
