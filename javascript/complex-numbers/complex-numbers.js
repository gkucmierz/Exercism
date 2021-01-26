//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const PRECISION = 1e-14;

const angleToComplex = (fi, r) => new ComplexNumber(
  Math.round(Math.cos(fi) * r / PRECISION) * PRECISION,
  Math.round(Math.sin(fi) * r / PRECISION) * PRECISION
);

const mulDiv = (n1, n2, rf, ff) => {
  const fi1 = Math.atan2(n1.imag, n1.real);
  const fi2 = Math.atan2(n2.imag, n2.real);
  const r1 = Math.hypot(n1.imag, n1.real);
  const r2 = Math.hypot(n2.imag, n2.real);
  const r = rf(r1, r2);
  const fi = ff(fi1, fi2);
  return angleToComplex(fi, r);
};

const unifyZero = n => {
  if (n === -0) return 0;
  return n;
};

export class ComplexNumber {
  constructor(real, imag) {
    this._real = real;
    this._imag = imag;
  }

  get real() {
    return this._real;
  }

  get imag() {
    return this._imag;
  }

  add(num) {
    return new ComplexNumber(this._real + num.real, this._imag + num.imag);
  }

  sub(num) {
    return new ComplexNumber(this._real - num.real, this._imag - num.imag);
  }

  div(num) {
    return mulDiv(this, num, (r1, r2) => r1 / r2, (f1, f2) => f1 - f2);
  }

  mul(num) {
    return mulDiv(this, num, (r1, r2) => r1 * r2, (f1, f2) => f1 + f2);
  }

  get abs() {
    return Math.hypot(this.real, this.imag);
  }

  get conj() {
    return new ComplexNumber(this.real, unifyZero(-this.imag));
  }

  get exp() {
    return angleToComplex(this.imag, Math.exp(this.real));
  }
}
