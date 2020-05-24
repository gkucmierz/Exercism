// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

const names = new Set();
const random = () => {
  const letters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  const digits = [...'0123456789'];
  return [
    letters,
    letters,
    digits,
    digits,
    digits,
  ].map(set => set[Math.random() * set.length | 0]).join``;
};

export class Robot {
  constructor() {
    this.reset();
  }

  get name() {
    return this._name;
  }

  set name(_) {
    throw new Error();
  }

  reset() {
    do {
      this._name = random();
    } while(names.has(this._name));
    names.add(this._name);
  }
}

Robot.releaseNames = () => names.clear();
