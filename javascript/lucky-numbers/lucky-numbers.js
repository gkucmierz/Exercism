// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return [array1, array2]
    .map(a => +a.join(''))
    .reduce((a, b) => a + b, 0);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  return +[...value+''].reverse().join('') === value;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  const REQUIRED_FIELD = 'Required field';
  const MUST_BE = 'Must be a number besides 0';
  if (input === '') return REQUIRED_FIELD;
  if (input === null) return REQUIRED_FIELD;
  if (input === undefined) return REQUIRED_FIELD;
  if (Number.isNaN(+input)) return MUST_BE;
  if (+input === 0) return MUST_BE;
  return '';
}
