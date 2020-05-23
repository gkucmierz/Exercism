//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRoman = n => {
  const m = [
    ['I', 'V'],
    ['X', 'L'],
    ['C', 'D'],
    ['M']
  ];
  const c = ' 0 00 000 01 1 10 100 1000 02'.split(' ');
  const res = [];
  let i = 0;
  while (n > 0) {
    const t = n % 10;
    res.unshift(c[t].split('').map((e) => {
      if (+e === 2) return m[i+1][0];
      return m[i][e];
    }).join(''));
    ++i;
    n = (n - t) * 0.1;;
  }
  return res.join``;
};
