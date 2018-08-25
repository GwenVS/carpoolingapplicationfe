import {Location} from './Location';
import {SubRide} from './SubRide';
import {RideRequest} from './RideRequest';
import {Car} from './Car';
import {UserRideInfo} from './UserRideInfo';
export class Ride {
  rideId:number;
  departureTimeOutwardJourney: String;
  departureTimeReturnTrip: String;
  rideType: String;
  locations: Location[]=[];
  chosenCar: Car;
  subRides: SubRide[]=[];
  rideRequests: RideRequest[]=[];
  userRideInfos: UserRideInfo[]=[];
}
