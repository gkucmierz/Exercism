//
// This is only a SKELETON file for the 'Sublist' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const EQUAL = 'EQUAL';
const SUBLIST = 'SUBLIST';
const SUPERLIST = 'SUPERLIST';
const UNEQUAL = 'UNEQUAL';

const isEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const isSublist = (sub, sup) => {
  if (sub.length === 0) return true;
  const len = sup.length - sub.length;
  let idx = -1;
  while (idx < len) {
    idx = sup.indexOf(sub[0], idx + 1);
    if (idx === -1) return false;
    let correct = true;
    for (let i = 0; i < sub.length; ++i) {
      if (sub[i] !== sup[idx+i]) {
        correct = false;
        break;
      }
    }
    if (correct) return true;
  }
  return false;
};

export class List {
  constructor(arr = []) {
    this.data = arr;
  }

  compare(list) {
    const [arr1, arr2] = [this.data, list.data];
    if (isEqual(arr1, arr2)) return EQUAL;
    if (isSublist(arr1, arr2)) return SUBLIST;
    if (isSublist(arr2, arr1)) return SUPERLIST;
    return UNEQUAL;
  }
}
