//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = m => {
  if (m.length === 0) return [];
  const max = m.reduce((max, row) => Math.max(max, row.length), 0);
  const res = [];
  for (let j = 0; j < max; ++j) {
    res[j] = [];
  }
  for (let i = 0; i < m.length; ++i) {
    for (let j = 0; j < m[i].length; ++j) {
      res[j][i] = m[i][j];
    }
  }
  return res.map(row => {
    for (let i = 0; i < row.length; ++i) {
      row[i] = row[i] ?? ' ';
    }
    return row.join('');
  });
};
