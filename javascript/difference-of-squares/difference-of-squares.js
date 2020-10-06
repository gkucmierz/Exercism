//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const dataSym = Symbol();

export class Squares {
  constructor(max) {
    const arr = new Array(max).fill(0).map((_, i) => i + 1);
    this[dataSym] = [
      arr.reduce((a, b) => a + b ** 2, 0),
      arr.reduce((a, b) => a + b, 0) ** 2,
    ];
  }

  get sumOfSquares() {
    return this[dataSym][0];
  }

  get squareOfSum() {
    return this[dataSym][1];
  }

  get difference() {
    return this[dataSym][1] - this[dataSym][0];
  }
}
