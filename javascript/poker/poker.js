//
// This is only a SKELETON file for the 'Poker' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const mapVal = {
  'J': 11,
  'Q': 12,
  'K': 13,
  'A': 14
};

const TYPE_HIGH_CARD = 0;
const TYPE_ONE_PAIR = 1;
const TYPE_TWO_PAIR = 2;
const TYPE_THREE_OF_A_KIND = 3;
const TYPE_STRAIGHT = 4;
const TYPE_FLUSH = 5;
const TYPE_FULL_HOUSE = 6;
const TYPE_FOUR_OF_A_KIND = 7;
const TYPE_STRAIGHT_FLUSH = 8;

const isStright = values => {
  const diff = values[1] - values[0];
  for (let i = 1; i < values.length; ++i) {
    if (values[i] -values[i-1] !== diff) return false;
  }
  return true;
};

const groupBy = (array, fn = el => el) => {
  const res = {};
  array.map(el => {
    const key = fn(el);
    if (!res[key]) res[key] = [];
    res[key].push(el);
  });
  return res;
};

export const bestHands = hands => {
  const sorted = hands.map(hand => {
    const cards = hand.split(/\s/).map(card => {
      const val = card.slice(0, -1);
      const value = mapVal[val] || +val;
      return { value, color: card.slice(-1) };
    });
    const colors = [...cards].map(({ color }) => color);
    const values = [...cards].map(({ value }) => value).sort((a, b) => b - a);
    const ace1 = values.map(v => v === mapVal['A'] ? 1 : v).sort((a, b) => b - a);
    const colorsCounts = Object.entries(groupBy(colors)).map(([_, arr]) => arr.length).sort((a, b) => b - a);
    const valuesMap = Object.entries(groupBy(values)).reduce((arr, [value, arrEl]) => {
      return [...arr, { value, count: arrEl.length }];
    }, []).sort((a, b) => {
      const diff = b.count - a.count;
      if (diff !== 0) return diff;
      return b.value - a.value;
    });
    const valuesCounts = valuesMap.map(({ count }) => count);
    const val = valuesMap.map(({ value }) => value);
    const flush = colorsCounts[0] === 5;
    
    let valueArr = [TYPE_HIGH_CARD, ...val];

    if (valuesCounts[0] === 2) valueArr = [TYPE_ONE_PAIR, ...val];
    if (valuesCounts[1] === 2) valueArr = [TYPE_TWO_PAIR, ...val];
    if (valuesCounts[0] === 3) valueArr = [TYPE_THREE_OF_A_KIND, ...val];
    if (isStright(values)) valueArr = [TYPE_STRAIGHT, Math.max(...val)];
    if (isStright(ace1)) valueArr = [TYPE_STRAIGHT, Math.max(...ace1)];
    if (flush) valueArr = [TYPE_FLUSH, ...val];
    if (valuesCounts[0] === 3 && valuesCounts[1] === 2) valueArr = [TYPE_FULL_HOUSE, ...val];
    if (valuesCounts[0] === 4) valueArr = [TYPE_FOUR_OF_A_KIND, ...val];
    if (flush && isStright(values)) valueArr = [TYPE_STRAIGHT_FLUSH, Math.max(...val)];
    if (flush && isStright(ace1)) valueArr = [TYPE_STRAIGHT_FLUSH, Math.max(...ace1)];

    return { hand, valueArr };
  }).sort((a, b) => {
    for (let i = 0; i < a.valueArr.length; ++i) {
      const diff = b.valueArr[i] - a.valueArr[i];
      if (diff !== 0) return diff;
    }
    return 0;
  });
  const win = sorted[0].valueArr;
  return sorted.filter(({ valueArr }) => win.every((v, i) => v === valueArr[i])).map(({ hand }) => hand);
};
