import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { AgmMap } from '@agm/core';
import {Location} from '../../models/Location';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {

  @Input() location: Location;
  zoom: number = 8;
  height: string = '300px';
  @ViewChild(AgmMap) private myMap: any;
  @ViewChild('mapContainer') mapContainer: any;

  constructor() { }

  ngOnInit() {
  }

}
