//
// This is only a SKELETON file for the 'Proverb' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const proverb = (...elements) => {
  if (elements.length === 0) return '';
  const words = elements.filter(el => typeof el === 'string');
  const qualifier = elements[elements.length-1]?.qualifier ?? false;

  const res = [];
  for (let i = 1; i < words.length; ++i) {
    res.push(`For want of a ${words[i-1]} the ${words[i]} was lost.`);
  }

  res.push(`And all for the want of a ${ qualifier ? `${qualifier} ` : '' }${words.shift()}.`);
  return res.join('\n');
};
