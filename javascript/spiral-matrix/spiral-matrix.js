//
// This is only a SKELETON file for the 'Spiral Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const dirs = [
  [ 1, 0],
  [ 0, 1],
  [-1, 0],
  [ 0,-1]
];

export const spiralMatrix = size => {
  if (size === 0) return [];
  const res = new Array(size).fill(0).map(_ => []);
  let [x, y] = [0, 0];
  let dir = 0;
  let [xd, yd] = dirs[dir];
  let cnt = 1;
  let last;
  while (1) {
    while (1) {
      res[y][x] = cnt++;
      x += xd;
      y += yd;
      if (!res[y]) break;
      if (res[y][x]) break;
      if (x >= size || x < 0) break;
      if (y >= size || y < 0) break;
    }
    x -= xd;
    y -= yd;
    --cnt;
    [xd, yd] = dirs[(++dir) % 4];
    if (last === cnt) break;
    last = cnt;
  }
  return res;
};
