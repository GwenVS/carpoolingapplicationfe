import {User} from './User';
import {Ride} from './ride';

export class RideRequest {
  rideRequestId: number;
  Text: String;
  user : User;
  ride: Ride;
}
