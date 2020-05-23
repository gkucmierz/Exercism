//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.isTriangle = (() => {
      const s = [a, b, c].sort();
      return s[2] < s[0] + s[1] && s[0] > 0;
    })();
  }

  isEquilateral() {
    return this._isTriangle() && this.a === this.b && this.b === this.c;
  }

  _isIsosceles() {
    return (
      this.a === this.b ||
      this.b === this.c ||
      this.c === this.a
    );
  }

  _isTriangle() {
    return this.isTriangle;
  }

  isIsosceles() {
    const s = [this.a, this.b, this.c].sort();
    return this._isTriangle() && this._isIsosceles();
  }

  isScalene() {
    return this._isTriangle() && !this.isIsosceles();
  }
}
