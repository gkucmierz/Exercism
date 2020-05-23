//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const pad = n => ('0' + n).substr(-2);

export class Clock {
  constructor(hours = 0, minutes = 0) {
    this.hours = ((hours + Math.floor(minutes / 60)) % 24 + 24) % 24;
    this.minutes = (minutes % 60 + 60) % 60;
  }

  toString() {
    return `${pad(this.hours)}:${pad(this.minutes)}`;
  }

  plus(minutes) {
    return new Clock(this.hours, this.minutes + minutes);
  }

  minus(minutes) {
    return new Clock(this.hours, this.minutes - minutes);
  }

  equals(clock) {
    return clock.toString() === this.toString();
  }
}
