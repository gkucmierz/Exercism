//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(str) {
    this._m = str.split(/\n/).map(l => l.split(/\s+/).map(n => +n));
    this._t = this._m.reduce((prev, next) => next.map((item, i) =>(prev[i] || []).concat(next[i])), []);
  }

  get rows() {
    return this._m;
  }

  get columns() {
    return this._t;
  }
}
