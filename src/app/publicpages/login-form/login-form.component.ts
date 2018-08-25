import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {HttpLoginServiceService} from '../../services/http-login-service.service';
import {LoginUser} from '../../models/loginUser';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  service: AuthService;
  httpService: HttpLoginServiceService;
  loginUser = new LoginUser('', '');
  public router: Router;
  public error = '';
  public feedback = '';


  constructor(router: Router, private userService: UserService, private authService: AuthService, private httpLoginService: HttpLoginServiceService, private fb: FormBuilder) {
    this.service = authService;
    this.router = router;
    this.httpService = httpLoginService;
  }

  form: FormGroup;

  ngOnInit(): void {
    this.buildForm();
    if (this.httpService.registrationComplete) {
      this.feedback = 'You are registered.';
    }
  }

  buildForm() {
    this.form = this.fb.group({
      'username':new FormControl('', [Validators.required, Validators.minLength(3)]),
      'password': new FormControl('', [Validators.required])
    });
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  clickLogin() {
    this.authService.checkCredentials(this.loginUser)
      .subscribe(
        res => {
          if (res) {
            this.userService.login(res);
            this.router.navigateByUrl('auth');
          } else {
            this.error = 'Username or password incorrect!';
          }
        },
        err => {
          this.error = 'Username or password incorrect!';
        }
      );
  }

  clickSearchRide() {
    this.router.navigateByUrl('pages/ride');
  }

  clickSignUp() {
    this.router.navigateByUrl('pages/signup');
  }
}
