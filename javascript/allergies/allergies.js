//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const products = [
  'eggs', 'peanuts', 'shellfish', 'strawberries',
  'tomatoes', 'chocolate', 'pollen', 'cats'
];

export class Allergies {
  constructor(score) {
    this.score = score;
  }

  list() {
    return products.filter((_, idx) => (1 << idx) & this.score);
  }

  allergicTo(product) {
    return this.list().includes(product);
  }
}
