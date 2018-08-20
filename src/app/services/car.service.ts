import {HttpClient} from '@angular/common/http';
import {Observable} from '../../../node_modules/rxjs';
import {Car} from '../models/Car';
import {USERNAME} from './auth.constant';

export class CarService {

  private carserviceUrl = "/server/api/cars"

  constructor(private http: HttpClient) {}

  getCarsByUser(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carserviceUrl+"/user/"+sessionStorage.getItem(USERNAME));
  }

}
