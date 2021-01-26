//
// This is only a SKELETON file for the 'Binary Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const find = (haystack, needle) => {
  if (haystack.length === 0) throw Error('Value not in array');

  let [mini, maxi] = [0, haystack.length];
  let last = false;

  while (1) {
    const midi = Math.floor((mini + maxi) / 2);
    const val = haystack[midi];
    if (val < needle) {
      mini = midi;
    } else if (val > needle) {
      maxi = midi;
    } else {
      return midi;
    }
    if (maxi - mini <= 1) {
      if (last) throw Error('Value not in array');
      last = true;
    }
  }
};
