import {Component, Input, OnInit} from '@angular/core';
import {Ride} from '../../models/ride';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.scss']
})
export class RidesComponent implements OnInit {

  @Input() rides: Ride[];
  noRidesFound='';


  step = 0;
  public basicPanelOpenState:any;

  constructor() { }

  ngOnInit() {
  }


  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
