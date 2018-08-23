import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Car} from '../../models/Car';
import {CarService} from '../../services/car.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.scss']
})
export class CardetailsComponent implements OnInit {

  @Output() deleted: EventEmitter<Car> = new EventEmitter();
  @Input() car: Car;
  carForm: FormGroup;
  validMessage = '';
  notValidMessage = '';

  constructor(private carService: CarService) {
  }

  //todo: customValidation
  ngOnInit() {
    this.carForm = new FormGroup({
      type: new FormControl('', Validators.required),
      consumption: new FormControl('', Validators.required),
      maxAmountPassengers: new FormControl('', Validators.required)
    });
  }

  save() {
    if (this.carForm.valid) {
      this.carService.updateCar(this.car).subscribe(
        (data) => {
          this.validMessage = 'Succesfully updated';
          this.notValidMessage = '';
        },
        (error) => {
          console.log(error.status);
          this.validMessage = '';
          this.notValidMessage = 'update not completed! Please try again later';
        }
      );
    } else {
      this.validMessage = '';
      this.notValidMessage = 'Please fill out the details correctly before submitting';
    }
  }

  deleteCar() {
    this.carService.deleteCar(this.car).subscribe(
      (data) => {
        this.deleted.emit(this.car);
      },
      (error) => {
        console.log(error.status);
        this.validMessage = '';
        this.notValidMessage = 'delete not completed! Remove attached rides first!';
      }
    );

  }
}
