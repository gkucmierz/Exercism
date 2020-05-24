//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values = []) {
    this.values = values;
  }

  append(list) {
    this.values = [...this.values, ...list.values];
    return this;
  }

  concat(list) {
    return new List([...this.values, ...list.values].reduce((arr, el) => {
      if (el instanceof List) {
        return [...arr, ...el.values];
      }
      return [...arr, el];
    }, []));
  }

  filter(fn) {
    return new List(this.values.filter(fn));
  }

  map(fn) {
    return new List(this.values.map(fn));
  }

  length() {
    return this.values.length;
  }

  foldl(fn, init) {
    return this.values.reduce(fn, init);
  }

  foldr(fn, init) {
    return this.values.reverse().reduce(fn, init);
  }

  reverse() {
    return new List(this.values.reverse());
  }
}
