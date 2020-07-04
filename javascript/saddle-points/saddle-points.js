//
// This is only a SKELETON file for the 'Saddle Points' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const findMin = (matrix, colIdx) => {
  let min = Infinity;
  for (let i = 0; i < matrix.length; ++i) {
    if (matrix[i][colIdx] < min) {
      min = matrix[i][colIdx];
    }
  }
  return min;
};

export const saddlePoints = matrix => {
  const saddle = [];
  matrix.map((row, ri) => {
    const max = Math.max(...row);
    row.map((cell, ci) => {
      if (cell !== max) return;
      if (findMin(matrix, ci) !== max) return;
      saddle.push({
        column: ci + 1,
        row: ri + 1
      });
    });
  });
  return saddle;
};
