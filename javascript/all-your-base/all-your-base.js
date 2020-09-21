//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const WRONG_FORMAT = 'Input has wrong format';
const WRONG_INPUT_BASE = 'Wrong input base';
const WRONG_OUTPUT_BASE = 'Wrong output base';

export const convert = (arr, source = 0, dest = 0) => {
  if (source < 2 || source !== ~~source) throw new Error(WRONG_INPUT_BASE);
  if (dest < 2 || dest !== ~~dest) throw new Error(WRONG_OUTPUT_BASE);
  if (arr.length === 0) throw new Error(WRONG_FORMAT);
  if (arr.length === 1 && arr[0] === 0) return [0];
  if (arr.length > 1 && arr[0] === 0) throw new Error(WRONG_FORMAT);
  const hasNegative = arr.some(n => n < 0);
  const overRange = arr.some(n => n >= source);
  if (hasNegative) throw new Error(WRONG_FORMAT);
  if (overRange) throw new Error(WRONG_FORMAT);

  const sbi = BigInt(source);
  let n = 0n;
  for (let i = 0; i < arr.length; ++i) {
    n *= sbi;
    n += BigInt(arr[i]);
  }
  const res = [];
  const dbi = BigInt(dest);
  while (n > 0n) {
    const div = n / dbi;
    const rest = n - div * dbi;
    res.unshift(Number(rest));
    n = div;
  }
  return res;
};
