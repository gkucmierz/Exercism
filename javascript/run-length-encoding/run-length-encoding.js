//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = str => {
  return str.replace(/([\w\s])\1+/g, m => `${m.length}${m[0]}`);
};

export const decode = str => {
  return str.replace(/([0-9]+)([\w\s])/g, (m, q, c) => c.repeat(q));
};
