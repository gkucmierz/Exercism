//
// This is only a SKELETON file for the 'Circular Buffer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class CircularBuffer {
  constructor(size) {
    this.size = size;
    this.buffer = [];
  }

  write(value) {
    if (value === null || value === undefined) return false;
    if (this.buffer.length >= this.size) throw BufferFullError;
    this.buffer.push(value);
  }

  read() {
    if (this.buffer.length === 0) throw BufferEmptyError;
    return this.buffer.shift();
  }

  forceWrite(value) {
    if (this.buffer.length >= this.size) this.read();
    this.write(value);
  }

  clear() {
    this.buffer = [];
  }
}

export default CircularBuffer;

export const BufferFullError = new Error('Buffer is full');
export const BufferEmptyError = new Error('Buffer is empty');
