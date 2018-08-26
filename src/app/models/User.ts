import {Car} from './Car';
import {RideRequest} from './RideRequest';

export class User {
  private _username: String;
  private _firstName: String;
  private _lastName: String;
  private _email: String;
  private _password: String;
  private _gender: String;
  private _birthday: String;
  private _isSmoker: boolean;
  private _cars: Car[];
  private _rideRequests: RideRequest[];

  constructor() {
    this._username = "";
    this._firstName = "";
    this._lastName = "";
    this._email = "";
    this._password= "";
    this._gender = "";
    this._birthday = "";
    this._isSmoker = false;
    this._cars = [];
    this._rideRequests = [];
  }

  fromJSON(obj: any){
    this._username = obj.username;
    this._firstName = obj.firstName;
    this._lastName = obj.lastName;
    this._email = obj.email;
    this._password = obj.password;
    this._gender = obj.gender;
    this._birthday = obj.birthday;
    this._isSmoker = obj.isSmoker;
    this._cars = obj.cars;
    this._rideRequests = obj.rideRequests;
    return this;
  }


  get username(): String {
    return this._username;
  }

  set username(value: String) {
    this._username = value;
  }

  get firstName(): String {
    return this._firstName;
  }

  set firstName(value: String) {
    this._firstName = value;
  }

  get lastName(): String {
    return this._lastName;
  }

  set lastName(value: String) {
    this._lastName = value;
  }

  get email(): String {
    return this._email;
  }

  set email(value: String) {
    this._email = value;
  }

  get password(): String {
    return this._password;
  }

  set password(value: String) {
    this._password = value;
  }

  get gender(): String {
    return this._gender;
  }

  set gender(value: String) {
    this._gender = value;
  }

  get birthday(): String {
    return this._birthday;
  }

  set birthday(value: String) {
    this._birthday = value;
  }


  get isSmoker(): boolean {
    return this._isSmoker;
  }

  set isSmoker(value: boolean) {
    this._isSmoker = value;
  }

  get cars(): Car[] {
    return this._cars;
  }

  set cars(value: Car[]) {
    this._cars = value;
  }


  get rideRequests(): RideRequest[] {
    return this._rideRequests;
  }

  set rideRequests(value: RideRequest[]) {
    this._rideRequests = value;
  }
}
