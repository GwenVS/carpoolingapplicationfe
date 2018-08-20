import { Component, OnInit } from '@angular/core';
import {Car} from '../../models/Car';
import {CarService} from '../../services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  public cars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars():void {
    this.carService.getCarsByUser().subscribe(cars=> this.cars= cars);
  }

}
