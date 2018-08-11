import {Component, OnInit, Input, HostListener, ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../../model/User';
import {DomSanitizer} from '@angular/platform-browser';
import {AppDataService} from '../../../services/app-data.service';

@Component({
  selector: 'cdk-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  @Input() currentUser: User;
  router: Router;
  isOpen: boolean = false;
  imageSrc = 'assets/images/avatars/noavatar.png';

  @HostListener('document:click', ['$event', '$event.target'])
  onClick(event: MouseEvent, targetElement: HTMLElement) {
    if (!targetElement) {
      return;
    }

    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.isOpen = false;
    }
  }


  constructor(private elementRef: ElementRef, router: Router, private appDataService: AppDataService,private domSanitizer : DomSanitizer) {
    this.router = router;
  }


  ngOnInit() {
    this.appDataService.getProfilePicture().subscribe(
      (data) => {
        this.imageSrc = data;
      }
    );
  }

  profileClick() {
    this.router.navigateByUrl('auth/profile');
  }

  logout() {
    sessionStorage.clear(); //todo: niet voldoende??
    this.router.navigateByUrl('login');
  }
}
