import {Component, OnInit, Input} from '@angular/core';
import {RideRequest} from '../../models/RideRequest';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() rideRequests : RideRequest[];
  @Input() myRideRequests : RideRequest[];

  constructor() {
  }

  ngOnInit() {
  }
}
