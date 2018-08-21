import {Component, Input, OnInit} from '@angular/core';
import {RideService} from '../../services/ride.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Ride} from '../../models/ride';

@Component({
  selector: 'app-create-ride',
  templateUrl: './create-ride.component.html',
  styleUrls: ['./create-ride.component.scss']
})
export class CreateRideComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  ride: Ride;
  message = '';
  rideTypes = ['Single', 'BackAndForth'];
  constructor(private rideService: RideService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.ride= new Ride();
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      'departureTimeOutwardJourney': new FormControl('', [Validators.required]),
      'departureTimeReturnTrip': new FormControl(''),
      'rideType': new FormControl('', [Validators.required]),
      'carId': new FormControl('', [Validators.required])
    });
  }
  get departureTimeOutwardJourney() {
    return this.form.get('departureTimeOutwardJourney');
  }

  get departureTimeReturnTrip() {
    return this.form.get('departureTimeReturnTrip');
  }
  get rideType() {
    return this.form.get('rideType');
  }
  get carId() {
    return this.form.get('carId');
  }

  clickCreateRide() {
    this.submitted = true;
    if(this.form.valid) {
      this.rideService.createRide(this.form.value).subscribe(
        data => {
          this.ride = data;
          this.message = "Your ride was succesfully created.";
        },
        error1 => this.message = "Something went wrong while trying to create your ride, please try again later."
      );
    }
  }
}
