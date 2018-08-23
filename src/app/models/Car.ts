import {Ride} from './ride';

export class Car {
  carId: number;
  type: string;
  consumption: number;
  maxAmountPassengers: number;
  rides: Ride[]
}
