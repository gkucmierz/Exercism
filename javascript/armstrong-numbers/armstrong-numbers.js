//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = num => {
  const str = num.toString();
  const len = str.length;
  return num === [...str].reduce((acc, n) => acc + (+n) ** len, 0);
};
