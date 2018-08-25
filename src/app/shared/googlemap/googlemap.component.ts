import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { AgmMap } from '@agm/core';
import {Location} from '../../models/Location';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.scss']
})
export class GooglemapComponent implements OnInit {

  @Input() location: Location;
  @ViewChild(AgmMap) private myMap: any;
  @ViewChild('mapContainer') mapContainer: any;
  @Output() mapClicked: EventEmitter<Location> = new EventEmitter<Location>();

  constructor() { }

  ngOnInit() {
  }

  onMapClicked(event){
    console.log(event);
    this.location.latitude= event.coords.lat;
    this.location.longitude = event.coords.lng;
    this.mapClicked.emit(this.location);

  }
}

