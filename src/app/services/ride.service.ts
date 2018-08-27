import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Ride} from '../models/ride';
import {TOKEN_NAME, USERNAME} from './auth.constant';
import {Observable} from '../../../node_modules/rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + sessionStorage.getItem(TOKEN_NAME)
  })
};

@Injectable()
export class RideService {
  private rideServiceUrl = '/server/api/private/rides';
  private publicRideServiceUrl = '/server/api/public/rides';

  constructor(private http: HttpClient) {
  }

  createRide(ride: Ride): Observable<Ride> {
    return this.http.post<Ride>(this.rideServiceUrl + '/ride/' + sessionStorage.getItem(USERNAME), ride, httpOptions);
  }

  getRides(): Observable<Ride[]> {
    return this.http.get<Ride[]>(this.publicRideServiceUrl, httpOptions);
  }

  getRidesByUser(): Observable<Ride[]> {
    return this.http.get<Ride[]>(this.rideServiceUrl + '/user/' + sessionStorage.getItem(USERNAME), httpOptions);
  }


  getRideById(rideId: number): Observable<Ride> {
    return this.http.get<Ride>(this.publicRideServiceUrl + '/' + rideId, httpOptions);
  }

  deleteRide(ride: Ride): Observable<Ride> {
    return this.http.delete<Ride>(this.rideServiceUrl + '/' + ride.rideId, httpOptions);
  }
}
