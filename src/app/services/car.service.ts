import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from '../../../node_modules/rxjs';
import {Car} from '../models/Car';
import {TOKEN_NAME, USERNAME} from './auth.constant';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';
import {of} from '../../../node_modules/rxjs/observable/of';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + sessionStorage.getItem(TOKEN_NAME)})
};
@Injectable()
export class CarService {


  private carserviceUrl = "/server/api/public/cars";

  constructor(private http: HttpClient) {
  }

  getCarsByUser() : Observable<Car[]> {
    return this.http.get<Car[]>(this.carserviceUrl + '/user/' + sessionStorage.getItem(USERNAME), httpOptions).pipe(
      catchError(this.handleError<Car[]>('@CarService: getCarsByUser')));
  }

  createCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.carserviceUrl+ '/user/'+sessionStorage.getItem(USERNAME), car, httpOptions).pipe(
      catchError(this.handleError<Car>('@CarService: createCar')));
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
