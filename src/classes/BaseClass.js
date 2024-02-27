export class BaseClass {
    constructor(isOn) {
      this.isOn = isOn || false;
    }
  
    turnOnOff() {
      this.isOn = ! this.isOn;
    }
  
    isTurnedOn() {
      return this.isOn;
    }

  }