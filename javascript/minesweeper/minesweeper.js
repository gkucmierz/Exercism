//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const annotate = input =>  {
  const [h, w] = [input.length, input.length && input[0].length || 0];
  const cnt = [];
  const c2i = (x, y) => y * w + x;
  const n = [
    [-1, -1], [ 0, -1], [ 1, -1],
    [-1,  0],           [ 1,  0],
    [-1,  1], [ 0,  1], [ 1,  1],
  ];
  input.map((row, ri) => {
    [...row].map((cell, ci) => {
      if (cell === '*') {
        n.map(([x, y]) => {
          const [xp, yp] = [x+ci, y+ri];
          if (xp >= 0 && xp < w && yp >= 0 && yp < h) {
            const idx = c2i(xp, yp);
            cnt[idx] = (cnt[idx] | 0) + 1;
          }
        });
      }
    });
  });
  return input.map((row, ri) => {
    return [...row].map((cell, ci) => {
      const idx = c2i(ci, ri);
      return cell === ' ' ? cnt[idx] || ' ' : cell;
    }).join``;
  });
}
