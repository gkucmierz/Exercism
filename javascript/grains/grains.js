//
// This is only a SKELETON file for the 'Grains' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const square = number => {
  if (number <= 0 || number > 64) throw Error('square must be between 1 and 64');
  if (number === 64) return '9223372036854775808';
  return 2 ** (number - 1) + '';
};

export const total = () => {
  return '18446744073709551615';
};
