//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (str, n) => {
  if (str.length < n) throw new Error('Span must be smaller than string length');
  if (n < 0) throw new Error('Span must be greater than zero');
  if (n === 0) return 1;
  if (str === '') throw new Error('Span must be smaller than string length');
  if (Number.isNaN(+str)) throw new Error('Digits input must only contain digits');

  return Math.max(...str.split('0')
    .map(subStr => {
      if (subStr.length < n) return 0;
      let m = 0;
      let mul = 1;
      for (; m < n; ++m) {
        mul *= +subStr[m];
      }
      let max = mul;
      for (let i = 0; m < subStr.length; ++m, ++i) {
        mul /= +subStr[i];
        mul *= +subStr[m];
        if (mul > max) max = mul;
      }
      return max;
    }));
};
