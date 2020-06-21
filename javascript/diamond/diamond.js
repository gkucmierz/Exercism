//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const rows = char => {
  const size = CHARS.indexOf(char);
  const res = [size ? [char, ' '.repeat(size * 2 - 1), char].join`` : char];
  for (let i = 0; i < size; ++i) {
    const char = CHARS[size - i - 1];
    const outer = ' '.repeat(i+1)
    const innerSize = size*2-i*2-1-2;
    const inner = ' '.repeat(Math.max(innerSize, 0));
    const line = [outer, char, inner, (innerSize < 0 ? '' : char), outer].join``;
    res.push(line);
    res.unshift(line);
  }

  return res;
};
