//
// This is only a SKELETON file for the 'Custom Set' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const setSym = Symbol();

const union = (set1, set2) => new Set([...set1, ...set2]);

export class CustomSet {
  constructor(arr = []) {
    this[setSym] = new Set([...arr]);
  }

  empty() {
    return this[setSym].size === 0;
  }

  contains(el) {
    return this[setSym].has(el);
  }

  add(el) {
    this[setSym].add(el);
    return this;
  }

  subset(set) {
    const u = union(set[setSym], this[setSym]);
    return u.size === set[setSym].size;
  }

  disjoint(set) {
    const u = union(set[setSym], this[setSym]);
    return u.size === set[setSym].size + this[setSym].size;
  }

  eql(set) {
    const u = union(set[setSym], this[setSym]);
    return u.size === set[setSym].size && u.size === this[setSym].size;
  }

  union(set) {
    return new CustomSet([...union(set[setSym], this[setSym])]);
  }

  intersection(set) {
    return new CustomSet([...this[setSym]].filter(el => set[setSym].has(el)));
  }

  difference(set) {
    return new CustomSet([...this[setSym]].filter(el => !set[setSym].has(el)));
  }
}
