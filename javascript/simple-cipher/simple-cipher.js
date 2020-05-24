//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const alph = 'abcdefghijklmnopqrstuvwxyz';

const transcode = (strKey, str, dir) => {
  const key = [...strKey].map(c => alph.indexOf(c));
  return str.replace(/./g, (c, i) => {
    const idx = alph.indexOf(c);
    if (idx !== -1) {
      return alph[(idx + alph.length + key[i%key.length] * dir) % alph.length];
    }
    return c;
  });
};

export class Cipher {
  constructor(key = 'qwertyuiop') {
    this._key = key;
  }

  encode(str) {
    return transcode(this._key, str, 1);
  }

  decode(str) {
    return transcode(this._key, str, -1);
  }

  get key() {
    return this._key;
  }
}
