//
// This is only a SKELETON file for the 'Crypto Square' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Crypto {
  constructor(text) {
    this.text = text;
  }

  normalizePlaintext() {
    return this.text.replace(/[^a-z0-9]/ig, '').toLowerCase();
  }

  size() {
    const len = this.normalizePlaintext().length;
    const sqrt = Math.sqrt(len);
    // const r = Math.floor(sqrt);
    const c = Math.ceil(sqrt);
    return c;
  }

  plaintextSegments() {
    const size = this.size();
    return this.normalizePlaintext().match(new RegExp(`.{1,${size}}`, 'g')) || [];
  }

  ciphertext() {
    const chunks = this.plaintextSegments();
    const res = new Array(chunks[0].length).fill(0).map(() => []);
    for (let i = 0; i < chunks.length; ++i) {
      for (let j = 0; j < chunks[i].length; ++j) {
        res[j].push(chunks[i][j]);
      }
    }
    return res.map(r => r.join``).join``;
  }
}
