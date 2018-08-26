import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpLoginServiceService} from '../../services/http-login-service.service';
import {RegisterUser} from '../../models/RegisterUser';


@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  service: HttpLoginServiceService;
  registerUser: RegisterUser = new RegisterUser('', '', '', '', '', '', '', '',false,[],[]);
  public label;
  public _passwordsAreTheSame: boolean = false;
  public passwordError = 'Passwords are not the same!';
  form: FormGroup;
  genders = ['Male', 'Female'];

  constructor(service: HttpLoginServiceService, private fb: FormBuilder, private router: Router) {
    this.service = service;
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      'username': new FormControl('', [Validators.required, Validators.minLength(4)]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'password2': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'firstName': new FormControl('', [Validators.required, Validators.minLength(1)]),
      'lastName': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'birthday': new FormControl('', [Validators.required]),
      'gender': new FormControl('', [Validators.required]),
      'profilePicture': new FormControl('')
    });
  }

  checkPassword() {
    let password: String = this.form.get('password').value;
    let password2: String = this.form.get('password2').value;

    if (password === password2) {
      this._passwordsAreTheSame = true;
    }
    else {
      this._passwordsAreTheSame = false;
    }
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  get password2() {
    return this.form.get('password2');
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get email() {
    return this.form.get('email');
  }

  get birthday() {
    return this.form.get('birthday');
  }

  get gender() {
    return this.form.get('gender');
  }

  get profilePicture() {
    return this.form.get('profilePicture');
  }

  clickRegister() {
    if (this.form.valid && this._passwordsAreTheSame) {
      this.service.doRegister(this.registerUser).subscribe((data) => {
        this.router.navigateByUrl("pages/login")
      }, error => console.log(this.label = error.error));
    }
  }

  clickLogin(){
    this.router.navigateByUrl("pages/login")
  }

  clickSearchRide() {
    this.router.navigateByUrl("pages/ride")
  }
}
