//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = map => {
  const res = {};
  Object.keys(map).map(key => {
    map[key].map(c => res[c.toLowerCase()] = +key);
  });
  return res;
};
