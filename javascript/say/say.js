//
// This is only a SKELETON file for the 'Say' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const digits = [
  'zero', 'one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight', 'nine',
];

const teens = [
  'ten', 'eleven', 'twelwe', 'thirteen', 'fourteen',
  'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
];

const tens = [
  '', '', 'twenty', 'thirty', 'forty',
  'fifty', 'sixty', 'seventy', 'eighty', 'ninety',
];

const thousands = [
  '', 'thousand', 'million', 'billion'
];

export const say = n => {
  if (n < 0) throw Error('Number must be between 0 and 999,999,999,999.');
  if (n >= 1e12) throw Error('Number must be between 0 and 999,999,999,999.');

  const nt = [];
  while (n > 0) {
    nt.unshift(n % 1000);
    n = (n / 1000) | 0;
  }
  if (nt.length === 0) return digits[0];

  const r = nt.map((t, i, arr) => {
    const digit = t % 10;
    const ten = (t % 100) / 10 | 0;
    const hundred = t / 100 | 0;

    const res = [];

    if (hundred > 0) {
      res.push(`${digits[hundred]} hundred`);
    }
    if (ten > 1) {
      res.push(digit === 0 ? tens[ten] : `${tens[ten]}-${digits[digit]}`);
    }
    if (ten === 0) {
      if (res.length === 0) res.push(digits[digit]);
    }
    if (ten === 1) res.push(teens[digit]);
    
    if (t === 0 && arr.length > 1) return '';
    return `${res.join(' ')} ${thousands[arr.length - i - 1]}`.trim();
  });

  return r.filter(s => s !== '').join(' ');
};
