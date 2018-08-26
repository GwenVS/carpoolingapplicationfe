import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ToolbarHelpers } from './toolbar.helpers';
import {RideRequest} from '../../../models/RideRequest';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() imageSrc;
	@Input() user$;
	@Input() rideRequests : RideRequest[];
  @Input() sidenav;
	@Input() sidebar;
	@Input() drawer;
	@Input() matDrawerShow;
  @Output() loggingOut: EventEmitter<any> = new EventEmitter();
  
	searchOpen: boolean = false;
    toolbarHelpers = ToolbarHelpers;
  	constructor() { }

  	ngOnInit() {
  	}

  	logout(){
      this.loggingOut.emit(null);
    }
}
