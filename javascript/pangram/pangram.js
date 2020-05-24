//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = str => {
  const set = new Set();
  const start = 'a'.charCodeAt();
  const end = 'z'.charCodeAt();
  [...str.toLowerCase()].map(c => {
    const code = c.charCodeAt();
    if (code >= start && code <= end) {
      set.add(code);
    }
  });
  return set.size === 26;
};
