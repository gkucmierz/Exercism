//
// This is only a SKELETON file for the 'Pythagorean Triplet' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triplet {
  constructor(a, b, c) {
    this.sides = [a, b, c];
  }

  sum() {
    return this.sides.reduce((a, b) => a + b);
  }

  product() {
    return this.sides.reduce((a, b) => a * b);
  }

  isPythagorean() {
    const sort = this.sides.sort((a, b) => a - b);
    return Math.hypot(sort[0], sort[1]) === sort[2];
  }

  static where(description) {
    const def = { minFactor: 1 };
    description = { ...def, ...description };
    const map = new Map();
    const set = new Set();
    for (let a = description.minFactor; a <= description.maxFactor; ++a) {
      for (let b = description.minFactor; b <= description.maxFactor; ++b) {
        for (let c = description.minFactor; c <= description.maxFactor; ++c) {
          const triplet = new Triplet(a, b, c);
          if (!triplet.isPythagorean()) continue;
          if (description.sum && triplet.sum() !== description.sum) continue;
          const prod = triplet.product();
          set.add(prod);
          map.set(prod, triplet);
        }
      }
    }
    return [...set].map(prod => map.get(prod));
  }
}
