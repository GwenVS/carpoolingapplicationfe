import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from '../../../node_modules/rxjs';
import {of} from '../../../node_modules/rxjs/observable/of';
import {catchError} from 'rxjs/operators';
import {Ride} from '../models/ride';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable()
export class RideService {
  constructor(private http: HttpClient) {
  }


  createRide(ride: Ride): Observable<Ride> {
    return this.http.post<Ride>('/server/api/rides', ride, httpOptions).pipe(
      catchError(this.handleError<Ride>('createRide')));
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
