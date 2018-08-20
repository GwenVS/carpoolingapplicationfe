import {User} from './User';
import {Ride} from './ride';

export class RideRequest {
  private _Text: String;
  private _user : User;
  private _ride: Ride;


  get Text(): String {
    return this._Text;
  }

  set Text(value: String) {
    this._Text = value;
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
