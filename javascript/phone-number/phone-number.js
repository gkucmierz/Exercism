//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = str => {
  const phone = str.replace(/\D*/g, '');
  const sliced = phone.length === 11 && phone[0] === '1' ? phone.slice(1) : phone;
  if (str.match(/[a-z]/ig)) throw new Error('Letters not permitted');
  if (str.match(/[\@\:\!]/ig)) throw new Error('Punctuations not permitted');
  if (sliced.length < 10) throw new Error('Incorrect number of digits');
  if (sliced.length === 11 && sliced[0] !== '1') throw new Error('11 digits must start with 1');
  if (sliced.length > 11) throw new Error('More than 11 digits');
  if (sliced[0] === '0') throw new Error('Area code cannot start with zero');
  if (sliced[0] === '1') throw new Error('Area code cannot start with one');
  if (sliced[3] === '0') throw new Error('Exchange code cannot start with zero');
  if (sliced[3] === '1') throw new Error('Exchange code cannot start with one');
  return sliced;
};
