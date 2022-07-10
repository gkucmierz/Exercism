//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sum = (mul, max) => {
  let sum = 0;
  for (let i = 1; i < max; ++i) {
    const cond = mul.some(m => i % m === 0);
    if (cond) sum += i;
  }
  return sum;
};
