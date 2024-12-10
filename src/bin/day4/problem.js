const input = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX
`;

const lines = input.split("\n");
const matrix = lines.map(line => line.split(""));

let count = 0;
let answerInput = "";

// console.log("lines", lines);
// console.log("matrix", matrix);

// Loops through lines
for (let y = 0; y < lines.length; y++) {
  const line = lines[y];

  // Loops through letters
  for (let x = 0; x < line.length; x++) {
    const letter = line[x];

    if (letter === "X") {
      checkDown(matrix, x, y)
      checkUp(matrix, x, y)
      checkLeft(matrix, x, y)
      checkRight(matrix, x, y)
      checkDiagonallyUpLeft(matrix, x, y)
      checkDiagonallyUpRight(matrix, x, y)
      checkDiagonallyDownLeft(matrix, x, y)
      checkDiagonallyDownRight(matrix, x, y)
    }
  }
}




function checkDown(matrix, x, y) {
  if (matrix[y + 3]) {
    for (let i = 0; i < 4; i++) {
      if (matrix[x][y + i] === undefined) {
        break;
      }
      answerInput += matrix[x][y + i];
      if (answerInput.length == 4) {
        wordChecker(answerInput)
      }
    }
    answerInput = "";
  }
}

function checkUp(matrix, x, y) {
  if (matrix[y - 3]) {
    for (let i = 0; i < 4; i++) {
      if (matrix[x][y - i] === undefined) {
        break;
      }
      answerInput += matrix[x][y - i];
      if (answerInput.length == 4) {
        wordChecker(answerInput)
      }
    }
  }
  answerInput = "";
}
function checkLeft(matrix, x, y) {
  if (matrix[x - 3]) {
    for (let i = 0; i < 4; i++) {
      if (matrix[y][x - i] === undefined) {
        break;
      }
      answerInput += matrix[y][x - i];
      if (answerInput.length == 4) {
        wordChecker(answerInput)
      }
    }
    answerInput = "";
  }
}
function checkRight(matrix, x, y) {
  if (matrix[x + 3]) {
    for (let i = 0; i < 4; i++) {
      if (matrix[x + i][y] === undefined) {
        break;
      }
      answerInput += matrix[x + i][y];
      if (answerInput.length == 4) {
        wordChecker(answerInput)
      }
    }
    answerInput = "";
  }
}

function checkDiagonallyUpLeft(matrix, x, y) {
  if (matrix[x - 3] && matrix[y - 3]) {
    for (let i = 0; i < 4; i++) {
      if (matrix[x - i][y - i] === undefined) {
        break;
      }
      answerInput += matrix[x - i][y - i];
      if (answerInput.length == 4) {
        wordChecker(answerInput)
      }
    }
    answerInput = "";
  }
}
function checkDiagonallyUpRight(matrix, x, y) {
  if (matrix[x + 3] && matrix[y + 3]) {
    for (let i = 0; i < 4; i++) {
      if (matrix[x + i][y - i] === undefined) {
        break;
      }
      answerInput += matrix[x + i][y - i];
      if (answerInput.length == 4) {
        wordChecker(answerInput)
      }
    }
    answerInput = "";
  }
}
function checkDiagonallyDownLeft(matrix, x, y) {
  if (matrix[x + 3] && matrix[y - 3]) {
    for (let i = 0; i < 4; i++) {
      if (matrix[x + i][y - i] === undefined) {
        break;
      }
      answerInput += matrix[x + i][y - i];
      if (answerInput.length == 4) {
        wordChecker(answerInput)
      }
    }
    answerInput = "";
  }
}
function checkDiagonallyDownRight(matrix, x, y) {
  if (matrix[x - 3] && matrix[y + 3]) {
    for (let i = 0; i < 4; i++) {
      if (matrix[x - i][y + i] === undefined) {
        break;
      }
      answerInput += matrix[x - i][y + i];
      if (answerInput.length == 4) {
        wordChecker(answerInput)
      }
    }
    answerInput = "";
  }
}

function wordChecker(input) {
  if (input == "XMAS") {
    count++
    console.log("count", count)
  }
}
