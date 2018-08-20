import {Location} from './Location';
export class Ride {
  private _departureTimeOutwardJourney: String;
  private _departureTimeReturnTrip: String;
  private _rideType: String;
  private _locations: Location[];
  private _carId: number;

  get departureTimeOutwardJourney(): String {
    return this._departureTimeOutwardJourney;
  }

  set departureTimeOutwardJourney(value: String) {
    this._departureTimeOutwardJourney = value;
  }

  get departureTimeReturnTrip(): String {
    return this._departureTimeReturnTrip;
  }

  set departureTimeReturnTrip(value: String) {
    this._departureTimeReturnTrip = value;
  }

  get rideType(): String {
    return this._rideType;
  }

  set rideType(value: String) {
    this._rideType = value;
  }

  get locations(): Location[] {
    return this._locations;
  }

  set locations(value: Location[]) {
    this._locations = value;
  }

  get carId(): number {
    return this._carId;
  }

  set carId(value: number) {
    this._carId = value;
  }
}
