import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-ride',
  templateUrl: './search-ride.component.html',
  styleUrls: ['./search-ride.component.scss']
})
export class SearchRideComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {  }

  clickSignUp() {
    this.router.navigateByUrl("pages/signup")
  }
  clickLogin(){
    this.router.navigateByUrl("pages/login")
  }
}
