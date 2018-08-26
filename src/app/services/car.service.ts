import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from '../../../node_modules/rxjs';
import {Car} from '../models/Car';
import {TOKEN_NAME, USERNAME} from './auth.constant';
import {Injectable} from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + sessionStorage.getItem(TOKEN_NAME)
  })
};

@Injectable()
export class CarService {

  private carserviceUrl = '/server/api/public/cars';

  constructor(private http: HttpClient) {
  }

  getCarsByUser(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carserviceUrl + '/user/' + sessionStorage.getItem(USERNAME), httpOptions);
  }

  createCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.carserviceUrl + '/user/' + sessionStorage.getItem(USERNAME), car, httpOptions);
  }

  updateCar(car: Car): Observable<any> {
    return this.http.put(this.carserviceUrl + '/' + car.carId, car, httpOptions);
  }

  deleteCar(car: Car): Observable<Car> {
    return this.http.delete<Car>(this.carserviceUrl + '/'+ car.carId, httpOptions);
  }
}
