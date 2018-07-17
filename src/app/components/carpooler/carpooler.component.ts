import { Component, OnInit } from '@angular/core';
import {CarpoolerService} from '../../services/carpooler.service';

@Component({
  selector: 'app-carpooler',
  templateUrl: './carpooler.component.html',
  styleUrls: ['./carpooler.component.css']
})
export class CarpoolerComponent implements OnInit {
  public carpoolers;

  constructor(private carpoolerService: CarpoolerService) { }

  ngOnInit() {
    this.getCarpoolers();
  }

  getCarpoolers() {
    this.carpoolerService.getCarpoolers().subscribe(
      data => (this.carpoolers = data),
      err => console.error(err), //todo: logging
      () => console.log('carpoolers loaded') //todo: logging
    );
  }
}
