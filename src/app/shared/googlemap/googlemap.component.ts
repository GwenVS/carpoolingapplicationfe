import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { AgmMap } from '@agm/core';
import {Location} from '../../models/Location';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.scss']
})
export class GooglemapComponent implements OnInit {

  @Input() location: Location;
  zoom: number = 8;
  @ViewChild(AgmMap) private myMap: any;
  @ViewChild('mapContainer') mapContainer: any;

  constructor() { }

  ngOnInit() {
  }

  mapClicked(event){
    console.log(event)
  }

}
