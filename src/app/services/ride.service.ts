import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Ride} from '../models/ride';
import {TOKEN_NAME, USERNAME} from './auth.constant';
import {catchError} from 'rxjs/operators';
import {Observable} from '../../../node_modules/rxjs';
import {of} from '../../../node_modules/rxjs/observable/of';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + sessionStorage.getItem(TOKEN_NAME)
  })
};

@Injectable()
export class RideService {

  constructor(private http: HttpClient) {
  }

  createRide(ride: Ride): Observable<Ride> {
    return this.http.post<Ride>('/server/api/public/rides/' + sessionStorage.getItem(USERNAME), ride, httpOptions);
  }

  getRides(): Observable<Ride[]> {
    return this.http.get<Ride[]>('/server/api/public/rides', httpOptions);
  }

  getRidesByUser(): Observable<Ride[]> {
    return this.http.get<Ride[]>('/server/api/public/rides/user/' + sessionStorage.getItem(USERNAME), httpOptions)
  }


  getRideById(rideId: number) : Observable<Ride>{
    return this.http.get<Ride>('/server/api/public/rides/' + rideId, httpOptions)
  }
}
