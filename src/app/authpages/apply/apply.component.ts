import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RideService} from '../../services/ride.service';
import {Ride} from '../../models/ride';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RideRequest} from '../../models/RideRequest';
import {Car} from '../../models/Car';
import {RideRequestService} from '../../services/ride-request.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  loggedIn = true;
  ride: Ride;
  rideRequest: RideRequest;
  validMessage = '';
  notValidMessage = '';
  startIndex = 0;
  endIndex = 0;

  rideRequestForm: FormGroup;

  constructor(private route: ActivatedRoute, private rideService: RideService, private rideRequestService: RideRequestService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.rideRequest = new RideRequest();
    this.ride = new Ride();
    this.ride.chosenCar = new Car();
    this.getRide();
    this.buildForm();

  }

  buildForm() {
    this.rideRequestForm = this.fb.group({
      'requestText': new FormControl('', [Validators.maxLength(500)]),
      'startLoc': new FormControl('', [Validators.required]),
      'endLoc': new FormControl('', [Validators.required]),
    });
  }

  getRide(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.rideService.getRideById(id).subscribe(ride => this.ride = ride);
  }


  clickApply() {
    if (this.rideRequestForm.valid) {
      this.startIndex = this.ride.locations.findIndex(loc => (loc.latitude == this.rideRequest.startLocation.latitude && loc.longitude == this.rideRequest.startLocation.longitude));
      this.endIndex = this.ride.locations.findIndex(loc => (loc.latitude == this.rideRequest.endLocation.latitude && loc.longitude == this.rideRequest.endLocation.longitude));
      if(this.startIndex>=this.endIndex) {
        this.validMessage = '';
        this.notValidMessage = 'Apply not completed! Pickup must be before dropoff!';
      } else {
        this.rideRequestService.createRideRequest(this.rideRequest, this.ride.rideId).subscribe(
          (data) => {
            this.validMessage = 'Succesfully applied';
            this.notValidMessage = '';
            this.endIndex =0;
            this.startIndex=0;
            this.rideRequestForm.reset();
            this.validMessage = '';
            this.notValidMessage = '';
          },
          (error) => {
            console.log(error.status);
            this.validMessage = '';
            this.notValidMessage = 'Apply not completed! Please try again later';
          }
        );
      }
    } else {
      this.validMessage = '';
      this.notValidMessage = 'Please fill out the details correctly before submitting';
    }

  }
}
