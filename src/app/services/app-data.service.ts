import {Injectable} from '@angular/core';
import {TOKEN_NAME, USERNAME} from './auth.constant';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {User} from '../models/User';
import {Observable} from 'rxjs/Observable';
import {RegisterUser} from '../models/RegisterUser';
import {UserItem} from '../models/UserItem';

@Injectable()
export class AppDataService {
  private springURL = '/server/api/private';
  public http;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getUser(username): Observable<User> {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem(TOKEN_NAME)
    });

    return this.http.get(this.springURL + '/users/username/' + sessionStorage.getItem(USERNAME), {headers}).map((resp: Response) => new User().fromJSON(resp));
  }

  getProfilePicture() {
    const headers = new HttpHeaders({
      'Accept': 'application/octet-stream',
      'Content-Type': 'application/octet-stream',
      'Authorization': 'Bearer ' + sessionStorage.getItem(TOKEN_NAME)
    });

    return this.http.get(this.springURL + '/users/' + sessionStorage.getItem(USERNAME) + '/picture', {
      headers: headers,
      responseType: 'arraybuffer'
    }).map((resp) => {
      let blob = new Blob([resp], {type: 'image/png'});
      let urlCreator = window.URL;
      let testUrl = urlCreator.createObjectURL(blob);
      return testUrl;
    });
  }

  getProfilePictureOfUser(username) {
    const headers = new HttpHeaders({
      'Accept': 'application/octet-stream',
      'Content-Type': 'application/octet-stream',
      'Authorization': 'Bearer ' + sessionStorage.getItem(TOKEN_NAME)
    });
    return this.http.get(this.springURL + '/users/' + username + '/picture', {
      headers: headers,
      responseType: 'arraybuffer'
    }).map((resp) => {
      let blob = new Blob([resp], {type: 'image/png'});
      let urlCreator = window.URL;
      let testUrl = urlCreator.createObjectURL(blob);
      return testUrl;
    });
  }

  getAllUsers() {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem(TOKEN_NAME)
    });

    let users: UserItem[] = [];
    return this.http.get(this.springURL + '/users/limited', {headers}).map((resp) => {
      resp.forEach(userDto => {
        let user = new UserItem().fromJSON(userDto);
        users.push(user);
      });
      return users;
    });
  }

  updateUser(user: RegisterUser) {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem(TOKEN_NAME)
    });

    return this.http.put(this.springURL + '/users/' + user.username, user, {headers: headers}).map((resp: Response) => new User().fromJSON(resp));
  }

  updatePassword(user) {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem(TOKEN_NAME)
    });

    return this.http.post(this.springURL + '/users/' + sessionStorage.getItem(USERNAME) + '/updatepassword', user, {headers: headers}).map((resp: Response) => resp);
  }
}


