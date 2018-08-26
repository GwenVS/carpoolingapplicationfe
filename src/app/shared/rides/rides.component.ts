import {Component, Input, OnInit} from '@angular/core';
import {Ride} from '../../models/ride';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.scss']
})
export class RidesComponent implements OnInit {
  @Input() loggedIn;
  @Input() searchRides;
  @Input() rides: Ride[];

  constructor() { }

  ngOnInit() {
  }
}
