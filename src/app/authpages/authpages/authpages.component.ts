import {Component, Input, OnInit} from '@angular/core';
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
  @Input() isVisible : boolean = true;
  visibility = 'shown';
  sideNavOpened: boolean = true;
  matDrawerOpened: boolean = false;
  matDrawerShow: boolean = true;
  sideNavMode: string = 'side';
  user$: User;
  imageSrc = "../../../assets/noavatar.png";
  sanImage;
  ngOnChanges() {
    this.visibility = this.isVisible ? 'shown' : 'hidden';
  }

  constructor(private media: ObservableMedia,private userService: UserService ,private appDataService: AppDataService,private domSanitizer: DomSanitizer, private router: Router) {
  }

  ngOnInit() {
    this.sanImage = this.domSanitizer.bypassSecurityTrustUrl(this.imageSrc)
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
        this.sanImage = this.domSanitizer.bypassSecurityTrustUrl(this.imageSrc)
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

  logout(){
    this.userService.logout();
    this.router.navigateByUrl("pages/login");
  }

  onProfilePictureChanged(newUrl){
    this.imageSrc = newUrl;
    this.sanImage = this.domSanitizer.bypassSecurityTrustUrl(this.imageSrc)
    //todo: pass info on to children: reload?
  }
}
