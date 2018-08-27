import {Injectable} from '@angular/core';
import {TOKEN_NAME, USERNAME} from './auth.constant';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {User} from '../models/User';
import {Observable} from 'rxjs/Observable';
import {RegisterUser} from '../models/RegisterUser';

@Injectable()
export class AppDataService {
  private appDataUrl = '/server/api/private';
  public http;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getUser(username): Observable<User> {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem(TOKEN_NAME)
    });

    return this.http.get(this.appDataUrl + '/users/username/' + sessionStorage.getItem(USERNAME), {headers}).map((resp: Response) => new User().fromJSON(resp));
  }

  getProfilePicture() {
    const headers = new HttpHeaders({
      'Accept': 'application/octet-stream',
      'Content-Type': 'application/octet-stream',
      'Authorization': 'Bearer ' + sessionStorage.getItem(TOKEN_NAME)
    });

    return this.http.get(this.appDataUrl + '/users/' + sessionStorage.getItem(USERNAME) + '/picture', {
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
    return this.http.get(this.appDataUrl + '/users/' + username + '/picture', {
      headers: headers,
      responseType: 'arraybuffer'
    }).map((resp) => {
      let blob = new Blob([resp], {type: 'image/png'});
      let urlCreator = window.URL;
      let testUrl = urlCreator.createObjectURL(blob);
      return testUrl;
    });
  }

  updateUser(user: RegisterUser) {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem(TOKEN_NAME)
    });

    return this.http.put(this.appDataUrl + '/users/' + user.username, user, {headers: headers}).map((resp: Response) => new User().fromJSON(resp));
  }

  updatePassword(user) {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem(TOKEN_NAME)
    });

    return this.http.post(this.appDataUrl + '/users/' + sessionStorage.getItem(USERNAME) + '/updatepassword', user, {headers: headers})
      .map((resp: Response) => resp);
  }
}


