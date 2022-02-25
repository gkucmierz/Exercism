//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = str => {
  let last;
  while (last !== str) {
    last = str;
    str = str.replace(/(\([^\[\]\(\)\{\}]*\))|(\[[^\[\]\(\)\{\}]*\])|(\{[^\[\]\(\)\{\}]*\})/g, '');
  }
  return str.replace(/[^\[\]\{\}\(\)]*/, '') === '';
};
