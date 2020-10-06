//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const dataSym = Symbol();

export class Squares {
  constructor(n) {
    this[dataSym] = n;
  }

  get sumOfSquares() {
    const n = this[dataSym];
    return n * (n + 1) * (2 * n + 1) / 6;
  }

  get squareOfSum() {
    const n = this[dataSym];
    return (n * (n + 1) * 0.5) ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
