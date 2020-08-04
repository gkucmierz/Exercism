//
// This is only a SKELETON file for the 'Beer Song' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const join = (arr1, arr2) => {
  return [].concat(arr1, [''], arr2);
};

const getBottle = num => {
  if (num === 0) return [
    'No more bottles of beer on the wall, no more bottles of beer.',
    'Go to the store and buy some more, 99 bottles of beer on the wall.'
  ];
  if (num === 1) return [
    '1 bottle of beer on the wall, 1 bottle of beer.',
    'Take it down and pass it around, no more bottles of beer on the wall.'
  ];
  if (num === 2) return [
    `2 bottles of beer on the wall, 2 bottles of beer.`,
    `Take one down and pass it around, 1 bottle of beer on the wall.`
  ];
  return [
    `${num} bottles of beer on the wall, ${num} bottles of beer.`,
    `Take one down and pass it around, ${num-1} bottles of beer on the wall.`
  ];
};

export const recite = (initialBottlesCount, takeDownCount) => {
  return new Array(takeDownCount)
    .fill(0)
    .map((_, i) => getBottle(initialBottlesCount - i))
    .reduce(join);
};
