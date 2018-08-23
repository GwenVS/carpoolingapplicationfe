import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-public-search-ride',
  templateUrl: './public-search-ride.component.html',
  styleUrls: ['./public-search-ride.component.scss']
})
export class PublicSearchRideComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  clickSignUp() {
    this.router.navigateByUrl("pages/signup")
  }
  clickLogin(){
    this.router.navigateByUrl("pages/login")
  }
}
