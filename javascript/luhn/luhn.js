//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = str => {
  const digits = [...str.replace(/\s/g, '')].map(n => +n);
  if (digits.length <= 1) return false;
  return digits.reduceRight(({ sum, double }, el) => {
    sum += el;
    if (double) {
      sum += el;
      if (el * 2 > 9) sum -= 9;
    }
    return { sum, double: !double };
  }, { sum: 0, double: false }).sum % 10 === 0;
};
