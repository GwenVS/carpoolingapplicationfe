import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {menus} from './menu-element';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit ,OnChanges{
  @Input() imageSrc;
  @Input() iconOnly: boolean = false;
  public menus = menus;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let change = changes[propName];
      console.dir(change);
      if(change.isFirstChange()) {
        console.log(`first change: ${propName}`);
      } else {
        console.log(`prev: ${change.previousValue}, cur: ${change.currentValue}`);
      }
      if(propName == 'imageSrc') {
        this.imageSrc = change.currentValue;
      }
    }
  }
}
