//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const a = ['wink', 'double blink', 'close your eyes', 'jump'];

export const commands = num => {
  const rev = num & 0x10;
  const res = [...(num & 0xf).toString(2)].reverse().map((b, i) => b === '1' ? a[i] : '').filter(a => a);
  return rev ? res.reverse() : res;
};
