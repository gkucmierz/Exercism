//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const NUCLEOTIDES = [...'ACGT'];

export class NucleotideCounts {
  static parse(str) {
    const map = new Map();
    [...str].map(n => {
      if (!NUCLEOTIDES.includes(n)) throw Error('Invalid nucleotide in strand');
      map.set(n, (map.get(n) ?? 0) + 1);
    });
    return NUCLEOTIDES.map(n => map.get(n) ?? 0).join(' ');
  }
}
