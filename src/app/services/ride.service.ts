import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RideService {

  constructor(private http: HttpClient) { }
}
