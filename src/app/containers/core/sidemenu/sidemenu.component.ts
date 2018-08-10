import { Component, OnInit, Input } from '@angular/core';
import { menus } from './menu-element';
import {User} from '../../../model/User';
import {DomSanitizer} from '@angular/platform-browser';
import {USERNAME} from '../../../services/auth.constant';
import {AppDataService} from '../../../services/app-data.service';

@Component({
  selector: 'cdk-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
    @Input() public _user$: User;
    @Input() iconOnly:boolean = false;
    public menus = menus;
    public domSanitizerService;
    imageSrc = 'assets/images/avatars/noavatar.png';

    constructor(private appDataService: AppDataService, private domSanitizer : DomSanitizer) {
      this.domSanitizerService = this.domSanitizer;
    }

  ngOnInit() {
    this.appDataService.getProfilePicture().subscribe(
      (data) => {
        this.imageSrc = data;
      }
    );
  }
}
