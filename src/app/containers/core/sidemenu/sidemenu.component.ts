import { Component, OnInit, Input } from '@angular/core';
import { menus } from './menu-element';
import {User} from '../../../model/User';

@Component({
  selector: 'cdk-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
    @Input() public _user$: User;
    @Input() iconOnly:boolean = false;
    public menus = menus;

    constructor() { }

    ngOnInit() {
    }

}
