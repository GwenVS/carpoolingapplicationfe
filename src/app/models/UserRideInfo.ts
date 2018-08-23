import {User} from './User';
import {Ride} from './ride';

export class UserRideInfo {
  userRideInfoId: number;
  isDriver:boolean;
  user: User;
  ride: Ride;
}
