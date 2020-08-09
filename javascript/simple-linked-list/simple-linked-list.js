//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Element {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class List {
  constructor(init = []) {
    this.head = null;
    init.map(val => {
      const elem = new Element(val);
      this.add(elem);
    });
  }

  add(nextValue) {
    nextValue.next = this.head;
    this.head = nextValue;
  }

  get length() {
    let cnt = 0;
    let elem = this.head;
    while (elem) {
      ++cnt;
      elem = elem.next;
    }
    return cnt;
  }

  toArray() {
    const arr = [];
    let elem = this.head;
    while (elem) {
      arr.push(elem.value);
      elem = elem.next;
    }
    return arr;
  }

  reverse() {
    return new List(this.toArray());
  }
}
