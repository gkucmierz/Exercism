//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

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
    return new ComplexNumber(this.real + num.real, this.imag + num.imag);
  }

  sub(num) {
    return new ComplexNumber(this.real - num.real, this.imag - num.imag);
  }

  div(num) {
    const factor = num.real ** 2 + num.imag ** 2;
    return new ComplexNumber(
      (this.real * num.real + this.imag * num.imag) / factor,
      (this.imag * num.real - this.real * num.imag) / factor
    );
  }

  mul(num) {
    return new ComplexNumber(
      this.real * num.real - this.imag * num.imag,
      this.imag * num.real + this.real * num.imag
    );
  }

  get abs() {
    return Math.hypot(this.real, this.imag);
  }

  get conj() {
    return new ComplexNumber(this.real, this.imag === 0 ? 0 : -this.imag);
  }

  get exp() {
    const r = Math.exp(this.real);
    return new ComplexNumber(Math.cos(this.imag) * r, Math.sin(this.imag) * r);
  }
}
