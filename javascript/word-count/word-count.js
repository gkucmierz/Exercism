//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const arrayHistogram = (arr, pick = el => el) => {
  const quant = new Map();
  arr.map(obj => {
    const el = pick(obj);
    const cnt = quant.get(el) || 0;
    quant.set(el, cnt + 1);
  });
  return quant;
};

export const countWords = sentence => {
  const words = sentence.toLowerCase().split(/[\s,\.:\!\&\@\$\%\^\&]+/);
  const noQuot = words.map(word => {
    if (word[0] !== '\'') return word;
    if (word.substr(-1) !== '\'') return word;
    return word.substr(1, word.length-2);
  });
  const res = {};
  [...arrayHistogram(noQuot)].map(([word, count]) => word && (res[word] = count));
  return res;
};
