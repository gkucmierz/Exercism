//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(list) {
    this.list = list;
  }

  get scores() {
    return this.list;
  }

  get latest() {
    return this.list.slice(-1)[0];
  }

  get personalBest() {
    return Math.max(...this.list);
  }

  get personalTopThree() {
    return this.list.sort((a, b) => b - a).slice(0, 3);
  }
}
