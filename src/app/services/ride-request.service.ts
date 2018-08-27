import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TOKEN_NAME, USERNAME} from './auth.constant';
import {RideRequest} from '../models/RideRequest';
import {Observable} from '../../../node_modules/rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + sessionStorage.getItem(TOKEN_NAME)
  })
};

@Injectable()
export class RideRequestService {
  rideRequestServiceUrl = '/server/api/private/riderequests';

  constructor(private http: HttpClient) {
  }

  createRideRequest(rideRequest: RideRequest, rideId: number): Observable<RideRequest> {
    return this.http.post<RideRequest>(this.rideRequestServiceUrl + '/ride/' + rideId + '/user/' + sessionStorage.getItem(USERNAME), rideRequest, httpOptions);
  }

  getRideRequestsForMyRides(): Observable<RideRequest[]> {
    return this.http.get<RideRequest[]>(this.rideRequestServiceUrl + '/user/rides/' + sessionStorage.getItem(USERNAME), httpOptions);
  }

  getMyRideRequests(): Observable<RideRequest[]> {
    return this.http.get<RideRequest[]>(this.rideRequestServiceUrl + '/user/' + sessionStorage.getItem(USERNAME), httpOptions);
  }

  acceptRideRequest(rideRequest: RideRequest): Observable<any> {
    return this.http.put<RideRequest>(this.rideRequestServiceUrl + '/accept/'+ rideRequest.rideRequestId, httpOptions);
  }

  deleteRideRequest(rideRequest: RideRequest): Observable<RideRequest> {
    const id = typeof rideRequest === 'number' ? rideRequest : rideRequest.rideRequestId;
    const url = `${this.rideRequestServiceUrl}/${id}`;
    return this.http.delete<RideRequest>(this.rideRequestServiceUrl + '/' + id, httpOptions);
  }

}
