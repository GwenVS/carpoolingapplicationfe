import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Car} from '../../models/Car';
import {CarService} from '../../services/car.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  @Input() public cars: Car[];
  carForm: FormGroup;
  validMessage = '';

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.carForm = new FormGroup({
      type: new FormControl('', Validators.required),
      consumption: new FormControl('', Validators.required),
      maxAmountPassengers: new FormControl('', Validators.required)
    });
  }


  submitCar(){
    if(this.carForm.valid) {
      this.carService.createCar(this.carForm.value).subscribe(
        data=> {
          this.cars.push(data);
          this.validMessage = 'A new car has been succesfully added to your profile.';
          this.carForm.reset();
          return true;
        })
    } else {
      this.validMessage = 'Please fill out the form before submitting';
    }
  }
}
