import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Carpooler} from '../models/Carpooler';
import {catchError} from 'rxjs/internal/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable()
export class CarpoolerService {

  constructor(private http: HttpClient) { }

  getCarpoolers(): Observable<Carpooler[]> {
    const token = localStorage.getItem(('access_token'));
    return this.http.get<Carpooler[]>('/server/api/carpoolers',
      { headers: new HttpHeaders()
          .set('Authorization', 'Bearer ' + token)}).pipe(
      catchError(this.handleError<Carpooler[]>('getCarpoolers', [])));
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
