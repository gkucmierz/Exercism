//
// This is only a SKELETON file for the 'Square root' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const squareRoot = n => {
  let appr = 1;
  let last;
  const stop = 1e-9;
  while (1) {
    last = appr;
    appr = (appr + n / appr) * 0.5;
    if (Math.abs(appr - last) <= stop) break;
  }
  return appr;
};
