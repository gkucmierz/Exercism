//
// This is only a SKELETON file for the 'Strain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const keep = (arr, fn) => arr.filter(fn);
export const discard = (arr, fn) => arr.filter(el => !fn(el));
