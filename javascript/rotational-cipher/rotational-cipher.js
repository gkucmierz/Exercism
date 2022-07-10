//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rotate = (str, diff) => {
  const repl = lastChar => char => {
    const last = lastChar.charCodeAt();
    const code = char.charCodeAt() + diff;
    return String.fromCharCode(code > last ? code - 26 : code);
  };

  return str
    .replace(/[a-z]/g, repl('z'))
    .replace(/[A-Z]/g, repl('Z'));
};
