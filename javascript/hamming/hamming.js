//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (str1, str2) => {
  const [len1, len2] = [str1.length, str2.length];
  if (len1 * len2 === 0 && len1 + len2 > 0) {
    throw new Error(`${len1 ? 'right' : 'left'} strand must not be empty`);
  }
  if (len1 !== len2) {
    throw new Error('left and right strands must be of equal length');
  }
  let dist = 0;
  for (let i = 0; i < str1.length; ++i) {
    if (str1[i] !== str2[i]) {
      ++dist;
    }
  }
  return dist;
};
