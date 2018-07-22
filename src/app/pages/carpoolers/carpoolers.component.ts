import {Component, OnInit} from '@angular/core';
import {CarpoolerService} from '../../services/carpooler.service';

@Component({
  selector: 'app-carpoolers',
  templateUrl: './carpoolers.component.html'
})
export class CarpoolersComponent implements OnInit {
  public carpoolers;

  constructor(private carpoolerService: CarpoolerService) {
  }

  ngOnInit(): void {
    this.getCarpoolers();
  }

  getCarpoolers() {
    this.carpoolerService.getCarpoolers().subscribe(
      data => this.carpoolers = data,
      err => console.error(err),
      () => console.log('carpoolers loaded')  // todo: better logging
    );
  }


}
