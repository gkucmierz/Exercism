//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    if (!series) throw Error('series cannot be empty');
    this.series = series;
  }

  slices(sliceLength) {
    if (sliceLength > this.series.length) throw Error('slice length cannot be greater than series length');
    if (sliceLength === 0) throw Error('slice length cannot be zero');
    if (sliceLength < 0) throw Error('slice length cannot be negative');
    const max = this.series.length - sliceLength;
    const res = [];
    for (let i = 0; i <= max; ++i) {
      res.push([...this.series.substr(i, sliceLength)].map(n => +n));
    }
    return res;
  }
}
