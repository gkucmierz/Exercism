//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = phrase => {
  const sanity = phrase.replace(/['_]/g, '');
  return (sanity.match(/(\b|^)[a-z]/gi) ?? []).join('').toUpperCase();
};
