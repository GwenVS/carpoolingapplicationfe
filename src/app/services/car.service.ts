import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from '../../../node_modules/rxjs';
import {Car} from '../models/Car';
import {TOKEN_NAME, USERNAME} from './auth.constant';
import {Injectable} from '@angular/core';

@Injectable()
export class CarService {

  private carserviceUrl = "/server/api/public/cars";


  constructor(private http: HttpClient) {
  }

  getCarsByUser() : Observable<Car[]> {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem(TOKEN_NAME)
    });
    return this.http.get<Car[]>(this.carserviceUrl + '/user/' + sessionStorage.getItem(USERNAME), {headers});
  }

}
