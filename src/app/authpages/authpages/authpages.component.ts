import {Component, OnInit} from '@angular/core';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {User} from '../../models/User';
import {USERNAME} from '../../services/auth.constant';
import {AppDataService} from '../../services/app-data.service';
import {DomSanitizer} from '@angular/platform-browser';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authpages',
  templateUrl: './authpages.component.html',
  styleUrls: ['./authpages.component.scss']
})
export class AuthpagesComponent implements OnInit {
  isVisible : boolean = true;
  visibility = 'shown';
  sideNavOpened: boolean = true;
  matDrawerOpened: boolean = false;
  matDrawerShow: boolean = true;
  sideNavMode: string = 'side';
  user$: User;
  _imageSrc = "../../../assets/noavatar.png";
  imageSrc;
  messages = [
    {from: 'Catherin', subject: 'Shopping', content: 'hi there??'},
    {from: 'Jack', subject: 'Function', content: 'yes'},
    {from: 'Karina', subject: 'Get together', content: 'nice'},
    {from: 'Micheal', subject: 'Trip', content: 'ya.. I will'},
    {from: 'Ashik', subject: 'Meeting', content: 'Time??'},
    {from: 'Joy', subject: 'Party', content: 'Lets enjoy'},
  ];

  constructor(private media: ObservableMedia,private userService: UserService ,private appDataService: AppDataService,private domSanitizer: DomSanitizer, private router: Router) {
  }

  ngOnInit() {
    this.imageSrc = this.domSanitizer.bypassSecurityTrustUrl(this._imageSrc);
    this.media.subscribe((mediaChange: MediaChange) => {
      this.toggleView();
    });
    this.user$ = new User();
    this.appDataService.getUser(sessionStorage.getItem(USERNAME)).subscribe(data => {
      this.user$ = data;
    });
    this.appDataService.getProfilePicture().subscribe(
      (data) => {
        this._imageSrc = data;
        this.imageSrc = this.domSanitizer.bypassSecurityTrustUrl(this._imageSrc)
      }
    );

  }

  ngOnChanges() {
    this.visibility = this.isVisible ? 'shown' : 'hidden';
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

  logout(){
    this.userService.logout();
    this.router.navigateByUrl("pages/login");
  }

  onProfilePictureChanged(newUrl){
    newUrl.profilePictureChanged.subscribe(data=>
    console.log(data));
    //todo: pass info on to children: reload?
  }
  onUserChanged(user: User){
    this.user$ = user;
    //todo: pass info on to children: reload?
  }
}
