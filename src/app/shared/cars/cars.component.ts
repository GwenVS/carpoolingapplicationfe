import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../../models/Car';
import {CarService} from '../../services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  @Input() public cars: Car[];

  constructor() { }

  ngOnInit() {
  }

}
