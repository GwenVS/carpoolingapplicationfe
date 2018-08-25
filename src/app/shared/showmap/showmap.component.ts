import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Location} from '../../models/Location';
import {AgmMap} from '@agm/core';

@Component({
  selector: 'app-showmap',
  templateUrl: './showmap.component.html',
  styleUrls: ['./showmap.component.scss']
})
export class ShowmapComponent implements OnInit {

  @Input() location: Location;
  @ViewChild(AgmMap) private myMap: any;
  @ViewChild('mapContainer') mapContainer: any;
  newLoc: Location = new Location();

  constructor() { }

  ngOnInit() {
  }
}
