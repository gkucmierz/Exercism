//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = str => {
  const m = str.match(/^(\d)[\-]?(\d{3})[\-]?(\d{5})[\-]?(X|\d)$/);
  if (!m) return false;

  const checksum = [...m.slice(1, 4).join('')].reduce((s, n, i) => {
    return s + +n * (i + 1);
  }, 0) % 11;

  const cstr = checksum === 10 ? 'X' : `${checksum}`;
  if (m[4] !== cstr) return false;

  return true;
};
