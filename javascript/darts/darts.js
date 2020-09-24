//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x, y) => {
  const r = Math.hypot(x, y);
  if (r <= 1) return 10;
  if (r <= 5) return 5;
  if (r <= 10) return 1;
  if (r > 10) return 0;
};
