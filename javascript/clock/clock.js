//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const pad = n => ('0' + n).substr(-2);
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY

export class Clock {
  constructor(hours = 0, minutes = 0) {
    this.hours = (
        (hours + Math.floor(minutes / MINUTES_IN_HOUR))% HOURS_IN_DAY + HOURS_IN_DAY
      ) % HOURS_IN_DAY;
    this.minutes = (minutes % MINUTES_IN_HOUR + MINUTES_IN_HOUR) % MINUTES_IN_HOUR;
  }

  toString() {
    return `${pad(this.hours)}:${pad(this.minutes)}`;
  }

  plus(minutes) {
    return new Clock(this.hours, this.minutes + minutes);
  }

  minus(minutes) {
    return this.plus(-minutes);
  }

  equals(clock) {
    return clock.toString() === this.toString();
  }
}
