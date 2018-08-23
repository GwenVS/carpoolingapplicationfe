import {Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  messages = [
    {from: 'Catherin', subject: 'Shopping', content: 'hi there??'},
    {from: 'Jack', subject: 'Function', content: 'yes'},
    {from: 'Karina', subject: 'Get together', content: 'nice'},
    {from: 'Micheal', subject: 'Trip', content: 'ya.. I will'},
    {from: 'Ashik', subject: 'Meeting', content: 'Time??'},
    {from: 'Joy', subject: 'Party', content: 'Lets enjoy'},
  ];
}
