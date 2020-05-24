//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = n => {
  const res = [];
  let lvl = [1];
  while (n--) {
    res.push(lvl);
    const tmp = [...lvl, 0];
    for (let i = tmp.length - 1; i > 0; --i) {
      tmp[i] += tmp[i-1]
    }
    lvl = tmp;
  }
  return res;
};
