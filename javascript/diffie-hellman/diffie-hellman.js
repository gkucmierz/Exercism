//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isPrime = n => {
  if (n < 2) return false;
  if (n % 2 === 0) return n === 2;
  const root = Math.sqrt(n);
  for (let i = 3; i <= root; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};

export class DiffieHellman {
  constructor(p, g) {
    if (p <= 1 || g <= 1) throw Error('Constructor arguments are out of range');
    if (!isPrime(p) || !isPrime(g)) throw Error('Constructor arguments are not prime');
    this._p = p;
    this._g = g;
  }

  getPublicKey(privateKey) {
    if (privateKey < 0) throw Error('Private key is negative');
    if (privateKey === 0) throw Error('Private key is zero');
    if (privateKey === 1) throw Error('Private key is one');
    if (privateKey === this._p) throw Error('Private key equals the modulus parameter p');
    if (privateKey > this._p) throw Error('Private key is greater than the modulus parameter p');
    return this._g ** privateKey % this._p;
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return theirPublicKey ** myPrivateKey % this._p;
  }
}
