import {Location} from './Location';

export class SubRide {
  private _startLocation: Location;
  private _endLocation: Location;


  get startLocation(): Location {
    return this._startLocation;
  }

  set startLocation(value: Location) {
    this._startLocation = value;
  }

  get endLocation(): Location {
    return this._endLocation;
  }

  set endLocation(value: Location) {
    this._endLocation = value;
  }
}
