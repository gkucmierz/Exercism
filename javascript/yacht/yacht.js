//
// This is only a SKELETON file for the 'Yacht' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const cnt = n => a => a.filter(m => m === n).length * n;
const sum = a => a.reduce((a, b) => a + b, 0);
const straight = n => a => new Set([n, ...a]).size === 6 ? 30 : 0;

const fns = {
  'yacht': a => new Set(a).size === 1 ? 50 : 0,
  'ones': cnt(1),
  'twos': cnt(2),
  'threes': cnt(3),
  'fours': cnt(4),
  'fives': cnt(5),
  'sixes': cnt(6),
  'full house': a => {
    const set = new Set(a);
    if (set.size !== 2) return 0;
    const s = sum(a);
    const [e1, e2] = [...set];
    if (s === e1 * 2 + e2 * 3) return s;
    if (s === e1 * 3 + e2 * 2) return s;
    return 0;
  },
  'four of a kind': a => {
    const n = a[0] === a[1] ? a[0] : a[1] === a[2] ? a[1] : 0;
    const cnt = a.filter(m => m === n).length;
    if (cnt >= 4) return 4 * n;
    return 0;
  },
  'little straight': straight(6),
  'big straight': straight(1),
  'choice': a => sum(a)
};

export const score = (arr, method) => fns[method](arr);
