import {User} from './User';
import {Ride} from './ride';

export class UserRideInfo {
  private _isDriver:boolean;
  private _user: User;
  private _ride: Ride;


  get isDriver(): boolean {
    return this._isDriver;
  }

  set isDriver(value: boolean) {
    this._isDriver = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get ride(): Ride {
    return this._ride;
  }

  set ride(value: Ride) {
    this._ride = value;
  }
}
