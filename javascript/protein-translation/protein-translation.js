//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const map = new Map();
[
  ['Methionine', 'AUG'],
  ['Phenylalanine', 'UUU UUC'],
  ['Leucine', 'UUA UUG'],
  ['Serine', 'UCU UCC UCA UCG'],
  ['Tyrosine', 'UAU UAC'],
  ['Cysteine', 'UGU UGC'],
  ['Tryptophan', 'UGG'],
].map(([protein, rnas]) => rnas.split(/\s+/).map(rna => map.set(rna, protein)));

const stop = new Set('UAA UAG UGA'.split(/\s+/));

export const translate = (RNA = '') => {
  const arr = (RNA.match(/.{1,3}/g) || []);
  const res = [];
  for (let rna of arr) {
    if (stop.has(rna)) return res;
    const codon = map.get(rna);
    if (typeof codon === 'undefined') throw new Error('Invalid codon');
    res.push(codon);
  }
  return res;
};
