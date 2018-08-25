import {User} from './User';
import {Ride} from './ride';

export class RideRequest {
  rideRequestId: number;
  requestText: String;
  startLocation: Location;
  endLocation : Location;
  user : User;
  ride: Ride;
}
