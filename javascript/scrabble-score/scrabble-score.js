//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const scores = {
  'AEIOULNRST': 1,
  'DG': 2,
  'BCMP': 3,
  'FHVWY': 4,
  'K': 5,
  'JX': 8,
  'QZ': 10
};
const map = new Map();
Object.keys(scores).map(key => [...key].map(c => map.set(c, scores[key])));

export const score = word => {
  return [...word].reduce((a, c) => a + map.get(c.toUpperCase()), 0);
};
