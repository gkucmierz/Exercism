//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
  constructor() {
    this.list = [];
  }

  push(el) {
    this.list.push(el);
  }

  pop() {
    return this.list.pop();
  }

  shift() {
    return this.list.shift();
  }

  unshift(el) {
    this.list.unshift(el);
  }

  delete(el) {
    const idx = this.list.findIndex(n => n === el);
    if (idx !== -1) this.list.splice(idx, 1);
  }

  count() {
    return this.list.length;
  }
}
