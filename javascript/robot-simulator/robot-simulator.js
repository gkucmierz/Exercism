//
// This is only a SKELETON file for the 'Robot Simulator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InvalidInputError extends Error {
  constructor() {
    super();
  }
}

const DIRECTIONS = [
  { name: 'north', x:  0, y:  1 },
  { name: 'east',  x:  1, y:  0 },
  { name: 'south', x:  0, y: -1 },
  { name: 'west',  x: -1, y:  0 },
];
const DIRECTION_NAMES = new Set(DIRECTIONS.map(({ name }) => name));
const [X, Y] = [0, 1];

const dirDiff = (dir, diff) => {
  const idx = DIRECTIONS.findIndex(({ name }) => name === dir);
  return DIRECTIONS[(idx + diff) % DIRECTIONS.length].name;
};

const INSTRUCTIONS = {
  'L': 'turnLeft',
  'R': 'turnRight',
  'A': 'advance',
};

export class Robot {

  orient(bearing) {
    if (!DIRECTION_NAMES.has(bearing)) {
      throw new InvalidInputError();
    }
    this._bearing = bearing;
  }

  get bearing() {
    return this._bearing;
  }

  get coordinates() {
    return this._coordinates;
  }

  turnRight() {
    this._bearing = dirDiff(this._bearing, 1);
  }

  turnLeft() {
    this._bearing = dirDiff(this._bearing, 3);
  }

  at(x, y) {
    this._coordinates = [x, y];
  }

  advance() {
    const { x, y } = DIRECTIONS.filter(({ name }) => name === this._bearing).pop();
    this._coordinates[X] += x;
    this._coordinates[Y] += y;
  }

  static instructions(instr) {
    return [...instr].map(i => INSTRUCTIONS[i]);
  }

  place({ x, y, direction }) {
    this._coordinates = [x, y];
    this._bearing = direction;
  }

  evaluate(instr) {
    Robot.instructions(instr).map(instruction => this[instruction]());
  }
}
