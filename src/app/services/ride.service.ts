import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from '../../../node_modules/rxjs';
import {of} from '../../../node_modules/rxjs/observable/of';
import {Ride} from '../models/ride';
import {TOKEN_NAME, USERNAME} from './auth.constant';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class RideService {
  constructor(private http: HttpClient) {
  }


  createRide(ride): Observable<Ride> {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem(TOKEN_NAME)
    });
    return this.http.post<Ride>('/server/api/public/rides/ride/' + sessionStorage.getItem(USERNAME), ride, {headers: headers});
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
