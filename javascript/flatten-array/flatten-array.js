//
// This is only a SKELETON file for the 'Flatten Array' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const flatten = arr => {
  return arr.flat(100).filter(v => {
    if (v === undefined) return false;
    if (v === null) return false;
    return true;
  });
};
