import {Injectable} from '@angular/core';
import {TOKEN_NAME, USERNAME} from './auth.constant';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {User} from '../models/User';
import {Observable} from 'rxjs/Observable';
import {RegisterUser} from '../models/RegisterUser';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + sessionStorage.getItem(TOKEN_NAME)
  })
};

@Injectable()
export class AppDataService {
  private springURL = '/server/api/private';
  public http;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getUser(username): Observable<User> {
    return this.http.get(this.springURL + '/users/username/' + sessionStorage.getItem(USERNAME), httpOptions).map((resp: Response) => new User().fromJSON(resp));
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

  updateUser(user: RegisterUser) {
    return this.http.put(this.springURL + '/users/' + user.username, user, httpOptions).map((resp: Response) => new User().fromJSON(resp));
  }

  updatePassword(user) {
    return this.http.post(this.springURL + '/users/' + sessionStorage.getItem(USERNAME) + '/updatepassword', user, httpOptions)
      .map((resp: Response) => resp);
  }
}


