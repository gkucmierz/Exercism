//
// This is only a SKELETON file for the 'Palindrome Products' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Palindromes {
  static generate({ maxFactor, minFactor }) {
    if (maxFactor < minFactor) throw new Error('min must be <= max');
    const map = new Map();

    for (let i = minFactor; i <= maxFactor; ++i) {
      for (let j = minFactor; j <= maxFactor; ++j) {
        const prod = i * j;
        const rev = +[...prod+''].reverse().join('');
        if (prod === rev) {
          if (map.has(prod)) {
            const factors = map.get(prod).factors;
            const fct = [i, j].sort((a, b) => a - b);
            const idx = factors.findIndex(arr => arr[0] === fct[0] && arr[1] === fct[1]);
            if (idx === -1) factors.push(fct);
          } else {
            map.set(prod, {
              value: prod,
              factors: [[i, j].sort((a, b) => a - b)]
            });
          }
        }
      }
    }
    const sorted = [...map].map(([a, b]) => b).sort((a, b) => a.value - b.value);

    const empty = { value: null, factors: [] };
    return {
      smallest: sorted.at(0) || empty,
      largest: sorted.at(-1) || empty
    };
  }
}
