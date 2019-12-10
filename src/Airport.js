'use strict';

class Airport {
  constructor() {
    this._hangar = [];
  }
  planes() {
    return this._hangar;
  }
  landPlane(plane) {
    if(this.isStormy()) {
      throw new Error('cannot land in stormy conditions')
    }
    this._hangar.push(plane);
    
  }
  takeOffPlane(plane) {
    var index = this._hangar.indexOf(plane);
    if (index > -1) {
      this._hangar.splice(index, 1);
    }
  }
  isStormy() {
    return false
  }
}
