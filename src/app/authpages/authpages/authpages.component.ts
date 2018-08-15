import {Component, Input, OnInit} from '@angular/core';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {User} from '../../model/User';
import {USERNAME} from '../../services/auth.constant';
import {AppDataService} from '../../services/app-data.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-authpages',
  templateUrl: './authpages.component.html',
  styleUrls: ['./authpages.component.scss']
})
export class AuthpagesComponent implements OnInit {
  @Input() isVisible : boolean = true;
  visibility = 'shown';
  sideNavOpened: boolean = true;
  matDrawerOpened: boolean = false;
  matDrawerShow: boolean = true;
  sideNavMode: string = 'side';
  user$: User;
  imageSrc = "../../../assets/noavatar.png";
  domSanitizerService;

  ngOnChanges() {
    this.visibility = this.isVisible ? 'shown' : 'hidden';
  }

  constructor(private media: ObservableMedia,private appDataService: AppDataService,private domSanitizer: DomSanitizer) {
    this.domSanitizerService = this.domSanitizer;
  }

  ngOnInit() {
    this.media.subscribe((mediaChange: MediaChange) => {
      this.toggleView();
    });
    this.user$ = new User();
    this.appDataService.getUser(sessionStorage.getItem(USERNAME)).subscribe(data => {
      this.user$ = data;
    });
    this.appDataService.getProfilePicture().subscribe(
      (data) => {
        this.imageSrc = data;
      }
    );

  }
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }

  toggleView() {
    if (this.media.isActive('gt-md')) {
      this.sideNavMode = 'side';
      this.sideNavOpened = true;
      this.matDrawerOpened = false;
      this.matDrawerShow = true;
    } else if(this.media.isActive('gt-xs')) {
      this.sideNavMode = 'side';
      this.sideNavOpened = false;
      this.matDrawerOpened = true;
      this.matDrawerShow = true;
    } else if (this.media.isActive('lt-sm')) {
      this.sideNavMode = 'over';
      this.sideNavOpened = false;
      this.matDrawerOpened = false;
      this.matDrawerShow = false;
    }
  }
}
