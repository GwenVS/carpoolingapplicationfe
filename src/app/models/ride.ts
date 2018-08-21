import {Location} from './Location';
import {SubRide} from './SubRide';
import {RideRequest} from './RideRequest';
export class Ride {
  private _departureTimeOutwardJourney: String;
  private _departureTimeReturnTrip: String;
  private _rideType: String;
  private _locations: Location[];
  private _carId: number;
  private _subRides: SubRide[];
  private _rideRequests: RideRequest[];

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


  get subRides(): SubRide[] {
    return this._subRides;
  }

  set subRides(value: SubRide[]) {
    this._subRides = value;
  }

  get rideRequests(): RideRequest[] {
    return this._rideRequests;
  }

  set rideRequests(value: RideRequest[]) {
    this._rideRequests = value;
  }
}
