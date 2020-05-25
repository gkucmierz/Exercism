//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const unify = word => [...word.toLowerCase()].sort((a, b) => a.localeCompare(b)).join``;
const match = (word1, word2) => word1.toLowerCase() === word2.toLowerCase();

export const findAnagrams = (word, words) => {
  const cmp = unify(word);
  return words.filter(w => cmp === unify(w)).filter(w => !match(word, w));
};
