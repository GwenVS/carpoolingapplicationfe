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
    return this.http.post<Ride>('/server/api/public/rides/' + sessionStorage.getItem(USERNAME), ride, httpOptions).pipe(
      catchError(this.handleError<Ride>('@RideService: createRide')));
  }

  getRides(): Observable<Ride[]> {
    return this.http.get<Ride[]>('/server/api/public/rides', httpOptions).pipe(
      catchError(this.handleError<Ride[]>('@RideService: getRides')));
  }

  getRidesByUser(): Observable<Ride[]> {
    return this.http.get<Ride[]>('/server/api/public/user/' + sessionStorage.getItem(USERNAME)+ "/rides", httpOptions).pipe(
      catchError(this.handleError<Ride[]>('@RideService: getRides')));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
