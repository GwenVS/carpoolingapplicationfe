import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../../models/Car';
import {CarService} from '../../services/car.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.scss']
})
export class CardetailsComponent implements OnInit {

  @Input() car: Car;
  carForm: FormGroup;
  validMessage = '';

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carForm = new FormGroup({
      type: new FormControl('', Validators.required),
      consumption: new FormControl('', Validators.required),
      maxAmountPassengers: new FormControl('', Validators.required)
    });
  }

  save() {

    this.carService.updateCar(this.car).subscribe();
  }
}
