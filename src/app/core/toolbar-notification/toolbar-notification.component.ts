import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-toolbar-notification',
  templateUrl: './toolbar-notification.component.html',
  styleUrls: ['./toolbar-notification.component.scss']
})
export class ToolbarNotificationComponent implements OnInit {
	cssPrefix = 'toolbar-notification';
  	isOpen: boolean = false;
  	@Input() notifications = [];
  	
  	constructor(private elementRef: ElementRef) { }

  	ngOnInit() {
  	}

  	select() {
    	
  	}

  	delete(notification) {
    
  	}

}
