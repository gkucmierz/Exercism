//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = n => {
  const res = [];
  if (n % 3 === 0) res.push('Pling');
  if (n % 5 === 0) res.push('Plang');
  if (n % 7 === 0) res.push('Plong');
  if (res.length === 0) res.push(`${n}`);
  return res.join('');
};
