import {Location} from './Location';
import {SubRide} from './SubRide';
import {RideRequest} from './RideRequest';
export class Ride {
  departureTimeOutwardJourney: String;
  departureTimeReturnTrip: String;
  rideType: String;
  locations: Location[];
  carId: number;
  subRides: SubRide[];
  rideRequests: RideRequest[];
}
