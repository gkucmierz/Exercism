//
// This is only a SKELETON file for the 'Forth' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Forth {
  constructor() {
    this._stack = [];
    this._f = {
      '+': (a, b) => [a + b],
      '-': (a, b) => [a - b],
      '*': (a, b) => [a * b],
      '/': (a, b) => {
        if (b === 0) throw new Error('Division by zero');
        return [a / b | 0];
      },
      'dup': el => [el, el],
      'drop': el => [],
      'swap': (a, b) => [b, a],
      'over': (a, b) => [a, b, a],
    };
    this._uf = {};
  }

  evaluate(instr) {
    const lc = instr.toLowerCase();
    const f = this._f;
    const uf = this._uf;
    const m = lc.match(/^\:\s(.*)\s\;$/);
    const isN = t => +t + '' === t;
    
    const single = token => {
      if (token in f) {
        const elements = new Array(f[token].length).fill(0).map(() => {
          if (this._stack.length <= 0) throw new Error('Stack empty');
          return this._stack.pop();
        });
        this._stack.push(...f[token](...elements.reverse()));
      } else if (isN(token)) {
        this._stack.push(+token);
      } else {
        throw new Error('Unknown command');
      }
    };

    if (m) {
      const [name, ...tokens] = m[1].split(/\s/);
      if (isN(name)) throw new Error('Invalid definition');
      uf[name] = tokens.reduce((tokens, token) => {
        if (token in uf) {
          return [...tokens, ...uf[token]];
        }
        return [...tokens, token];
      }, []);
    } else {
      const tokens = lc.toLowerCase().split(/\s/);
      tokens.map(token => {
        if (token in uf) {
          uf[token].map(single);
        } else {
          single(token);
        }
      });
    }
  }

  get stack() {
    return this._stack;
  }
}
