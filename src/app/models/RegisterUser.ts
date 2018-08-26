import {Car} from './Car';
import {RideRequest} from './RideRequest';

export class RegisterUser {
  constructor(
    public username: String,
    public password: String,
    public firstName: String,
    public lastName: String,
    public email: String,
    public birthday: String,
    public gender: String,
    public profilePicture,
    public isSmoker: boolean,
    public cars: Car[],
    public rideRequests: RideRequest[]
  ){}
}
