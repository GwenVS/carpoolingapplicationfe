import {Component, Input, OnInit} from '@angular/core';
import {RideService} from '../../services/ride.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Ride} from '../../models/ride';
import {Car} from '../../models/Car';
import {CarService} from '../../services/car.service';
import {Router} from '@angular/router';

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
  cars: Car[];

  constructor(private rideService: RideService, private fb: FormBuilder, private carService: CarService, private router: Router) {
  }

  ngOnInit(): void {
    this.ride = new Ride();
    this.getCars();
    this.buildForm();
  }

  getCars() {
    this.carService.getCarsByUser().subscribe( data =>
    this.cars = data);
  }

  buildForm() {
    this.form = this.fb.group({
      'departureTimeOutwardJourney': new FormControl('', [Validators.required]),
      'departureTimeReturnTrip': new FormControl(''),
      'rideType': new FormControl('', [Validators.required]),
      'chosenCar': new FormControl('', [Validators.required])
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

  clickCreateRide() {
    if (this.form.valid) {
      this.rideService.createRide(this.form.value).subscribe(
        data => {
          this.ride = data;
          this.submitted = true;//todo: na submit nogmaals submit duwen en form unchanged: popup: are you sure you want to create this ride again,
          this.form.reset();
          this.message = 'Your ride was succesfully created.';
        },
        error1 => this.message = 'Something went wrong while trying to create your ride, please try again later.'
      );
    }
  }
  clickProfile() {
    this.router.navigateByUrl('/auth/profile')
  }
}
