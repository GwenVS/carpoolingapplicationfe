import {Component, OnInit, Input} from '@angular/core';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {User} from '../../model/User';
import {USERNAME} from '../../services/auth.constant';
import {UserService} from '../../services/user.service';
import {AppDataService} from '../../services/app-data.service';


@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.scss']

})

export class AuthenticatedComponent implements OnInit {
  @Input() isVisible: boolean = true;
  user$: User;
  visibility = 'shown';
  imageSrc = "https://www.vccircle.com/wp-content/uploads/2017/03/default-profile.png";

  sideNavOpened: boolean = true;
  matDrawerOpened: boolean = false;
  matDrawerShow: boolean = true;
  sideNavMode: string = 'side';

  ngOnChanges() {
    this.visibility = this.isVisible ? 'shown' : 'hidden';
  }

  constructor(private media: ObservableMedia, private userService: UserService, private appDataService: AppDataService,) {
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
    // return outlet.isActivated ? outlet.activatedRoute : ''
  }

  toggleView() {
    if (this.media.isActive('gt-md')) {
      this.sideNavMode = 'side';
      this.sideNavOpened = true;
      this.matDrawerOpened = false;
      this.matDrawerShow = true;
    } else if (this.media.isActive('gt-xs')) {
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
