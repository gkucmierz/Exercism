//
// This is only a SKELETON file for the 'Tournament' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const HEADER = `Team                           | MP |  W |  D |  L |  P`;
const SEPARATOR = ' | ';
const TEAM_SIZE = 30;

const resMap = {
  'win': 1,
  'draw': 0,
  'loss': -1
};

const resWeights = [3, 1, 0];

const padl = (n, s = 2) => (' '.repeat(s) + n).slice(-s);
const padr = (n, s = TEAM_SIZE) => (n + ' '.repeat(s)).slice(0, s);

export const tournamentTally = input => {
  const map = new Map();

  const add = (team, res) => {
    const stats = map.get(team) || { w: 0, d: 0, l: 0 };
    if (res === 1) stats.w++;
    if (res === 0) stats.d++;
    if (res === -1) stats.l++;
    map.set(team, stats);
  };

  input
    .split(/\n/).filter(l => l !== '')
    .map(line => {
    const [a, b, res] = line.split(';');
    add(a, resMap[res]);
    add(b, -resMap[res]);
  });

  return [
    HEADER,
    ...[...map].map(([team, stats]) => {
      const wins = [stats.w, stats.d, stats.l];
      stats.t = team;
      stats.mp = wins.reduce((a, b) => a + b, 0);
      stats.p = wins.reduce((a, b, i) => a + b * resWeights[i], 0);
      return stats;
    }).sort((a, b) => {
      const diff = b.p - a.p;
      if (diff === 0) return a.t.localeCompare(b.t);
      return diff;
    }).map(stats => {
      return [padr(stats.t), padl(stats.mp), padl(stats.w), padl(stats.d), padl(stats.l), padl(stats.p)].join(SEPARATOR);
    })
  ].join('\n');
};
