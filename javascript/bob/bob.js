//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const MSG_SURE = 'Sure.';
const MSG_WHOA = 'Whoa, chill out!';
const MSG_WHATEVER = 'Whatever.';
const MSG_CALM = 'Calm down, I know what I\'m doing!';
const MSG_FINE = 'Fine. Be that way!';

export const hey = message => {
  const trimmed = message.trim();

  const upper = trimmed === trimmed.toUpperCase() && trimmed.match(/[A-Z]/);
  const question = trimmed.endsWith`?`;
  const exclam = trimmed.endsWith`!`;
  const numbers = trimmed.match(/^[0-9\s,!\?]+$/);
  const empty = trimmed === '';

  if (empty) return MSG_FINE;
  if (numbers && question) return MSG_SURE;
  if (numbers) return MSG_WHATEVER;
  if (upper && question) return MSG_CALM;
  if (upper) return MSG_WHOA;
  if (exclam) return MSG_WHATEVER;
  if (question) return MSG_SURE;

  return MSG_WHATEVER;
};
