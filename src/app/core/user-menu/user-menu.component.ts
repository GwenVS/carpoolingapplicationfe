import {Component, OnInit, Input, HostListener, ElementRef, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../models/User';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  @Input() currentUser: User;
  @Input() imageSrc;
  isOpen: boolean = false;
  @Output() loggingOut: EventEmitter<any> = new EventEmitter();

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

  constructor(private elementRef: ElementRef, private router: Router) {
  }

  ngOnInit() {
  }

  profileClick() {
    this.router.navigateByUrl('auth/profile');
    this.isOpen = false;
  }

  logout() {
    this.loggingOut.emit(null);
  }
}
