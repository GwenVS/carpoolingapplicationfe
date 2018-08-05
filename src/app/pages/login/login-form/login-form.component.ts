import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpLoginServiceService} from '../../../services/http-login-service.service';
import {LoginUser} from '../../../model/loginUser';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {AuthService} from '../../../services/auth.service';


@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../login.component.scss']
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

  form = new FormGroup({
    'username': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'password': new FormControl('', [Validators.required])
  });
  formErrors = {
    'username': '',
    'password': ''
  };

  ngOnInit(): void {
    //this.userService.logout();
    if (this.httpService.registrationComplete) {
      this.feedback = 'You are registered.';
    }
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  clickLogin() {
    this.authService.login(this.loginUser)
      .subscribe(
        res => {
          if (res) {
            this.userService.login(res);
            this.router.navigateByUrl('main');
          } else {
            this.error = 'Username or password incorrect!';
          }
        },
        err => {
          this.error = 'Username or password incorrect!';
        }
      );
  }

  buildForm() {
    this.form = this.fb.group({
      'username': ['', [
        Validators.required,
        Validators.email
      ]
      ],
      'password': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25)
      ]
      ],
    });

    this.form.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {

  }

}
