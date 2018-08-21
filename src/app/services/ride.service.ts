import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from '../../../node_modules/rxjs';
import {of} from '../../../node_modules/rxjs/observable/of';
import {Ride} from '../models/ride';
import {TOKEN_NAME, USERNAME} from './auth.constant';

@Injectable()
export class RideService {

  constructor(private http: HttpClient) {
  }

  createRide(ride: Ride): Observable<Ride> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post<Ride>('/server/api/public/rides/' + sessionStorage.getItem(USERNAME), ride, httpOptions);
  }
}
