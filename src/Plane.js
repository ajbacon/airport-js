'use strict';

class Plane {
  constructor() {
    this._location = "sky";
  }
  land(airport) {
    airport.landPlane(this);
    this._location = airport;
  }
  takeOff(airport) {
    airport.takeOffPlane(this);
    this._location = "sky";
  }
  location() {
    return this._location;
  }
}



