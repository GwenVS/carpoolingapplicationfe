import { Component, OnInit } from '@angular/core';
import {CarpoolerService} from '../../services/carpooler.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
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
