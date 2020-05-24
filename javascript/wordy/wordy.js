//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isNum = el => (+el + '') === el;
const ops = {
  'plus': (a, b) => a + b,
  'minus': (a, b) => a - b,
  'multiplied by': (a, b) => a * b,
  'divided by': (a, b) => a / b,
};

export const answer = str => {
  const re = /(What is)|(\-?[0-9]+)|(\w+(\sby)?)/g;
  const tokens = str.match(re);
  if (tokens.shift() !== 'What is') throw new Error('Unknown operation');
  if (tokens.length === 0) throw new Error('Syntax error');

  let acc = 0;
  let op = 'plus';
  while (1) {
    const token = tokens.shift();
    if (typeof token === 'undefined') break;
    if (op) {
      if (!isNum(token)) throw new Error('Syntax error');
      acc = ops[op](acc, +token);
      op = '';
    } else if (token in ops) {
      op = token;
    } else if (isNum(token)) {
      throw new Error('Syntax error');
    } else {
      throw new Error('Unknown operation');
    }
  }
  
  if (op) {
    throw new Error('Syntax error');
  }
  return acc;
};
