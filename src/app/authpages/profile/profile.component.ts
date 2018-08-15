import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/User";
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppDataService} from "../../services/app-data.service";
import {RegisterUser} from "../../model/RegisterUser";
import {USERNAME} from '../../services/auth.constant';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  user$: User;
  @Input() public imageSrc: String;
  @Output() userChanged: EventEmitter<User> = new EventEmitter<User>();
  @Output() profilePictureChanged: EventEmitter<String> = new EventEmitter<String>();

  updatedUser: RegisterUser;
  _passwordsAreTheSame: boolean = false;
  public passwordError = "Passwords are not the same!";
  updateUserDetails: Boolean = true;
  message = '';
  genders = ['Male', 'Female'];

  form = new FormGroup({
    'firstName': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'lastName': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'username': new FormControl(),
    'email': new FormControl(),
    'birthday': new FormControl('', [Validators.required]),
    'gender': new FormControl('', [Validators.required])
  });

  changePasswordForm = new FormGroup({
    'password': new FormControl('', [Validators.required, Validators.minLength(8)]),
    'password2': new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(private appDataService: AppDataService) {
    this.updatedUser= new RegisterUser('','','','','','','', '');
  }

  ngOnInit(): void {
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

  checkPassword(){
    let password:String = this.changePasswordForm.get('password').value;
    let password2:String = this.changePasswordForm.get('password2').value;


    if(password === password2){
      this._passwordsAreTheSame = true;
    }
    else{
      this._passwordsAreTheSame = false;
    }
  }

  get passwordsAreTheSame(): boolean {
    return this._passwordsAreTheSame;
  }

  set passwordsAreTheSame(value: boolean) {
    this._passwordsAreTheSame = value;
  }

  get password() {
    return this.changePasswordForm.get('password');
  }

  get password2() {
    return this.changePasswordForm.get('password2');
  }

  get birthday() {
    return this.form.get('birthday');
  }

  get gender() {
    return this.form.get('gender');
  }

  onUserChanged(){
    this.userChanged.emit(this.user$);
  }

  onProfilePictureChanged(newUrl){
    this.profilePictureChanged.emit(newUrl);
  }

  changeUser(){
    if(this.form.valid){
      this.updatedUser.username = this.user$.username;
      this.updatedUser.firstName = this.user$.firstName;
      this.updatedUser.lastName = this.user$.lastName;
      this.updatedUser.email = this.user$.email;
      this.updatedUser.birthday = this.user$.birthday;
      this.updatedUser.gender = this.user$.gender;
      this.appDataService.updateUser(this.updatedUser).subscribe(
        data => {
          this.user$ = data;
          this.message = "Your details were updated successfully";
          this.onUserChanged();
        },
        error => this.message = "Oeps something went wrong while updating your details. Try again later!"
    );
    }
  }

  onChange(event){
    console.log(event);
  }

  onChangePasswordClicked(){
    this.message = "";
    this.updateUserDetails = false;
  }

  onChangeUserDetailsClicked(){
    this.message = "";
    this.updateUserDetails = true;
  }

  updatePassword(){
    if(this.changePasswordForm.valid){

      this.updatedUser.username = this.user$.username;
      this.updatedUser.firstName = this.user$.firstName;
      this.updatedUser.lastName = this.user$.lastName;
      this.updatedUser.email = this.user$.email;
      this.updatedUser.birthday = this.user$.birthday;
      this.updatedUser.gender = this.user$.gender;
      this.updatedUser.password = this.user$.password;
      this.appDataService.updatePassword(this.updatedUser).subscribe(
        (data) => this.message = "Password updated successfully",
        (error) => this.message = "Something went wrong while updating your password!"
      );
    }
  }
}
