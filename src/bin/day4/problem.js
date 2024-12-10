import fs from "fs";

function getInput(location) {
  const data = fs.readFileSync(String(location), "utf-8");
  return data;
}

const input = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

// const input = getInput("src/bin/day4/input.txt")

const lines = input.split("\n");
const matrix = lines.map(line => line.split(""));

let xMasCount = 0;
let answerInput = "";

// Loops through lines
for (let y = 0; y < lines.length; y++) {
  const line = lines[y];
  if (line.length == 0) {
    break
  }

  // Loops through letters
  for (let x = 0; x < line.length; x++) {
    const letter = line[x];

    if (letter === "X") {
      xmasChecker(matrix, x, y)
    }

  }
}

function xmasChecker(matrix, x, y) {
  function checkDown(matrix, x, y) {
    if (y + 3 < matrix.length - 1) {
      for (let i = 0; i < 4; i++) {
        answerInput += matrix[y + i][x];
        if (answerInput.length == 4) {
          wordChecker(answerInput)
        }
      }
      answerInput = "";
    }
  }

  function checkUp(matrix, x, y) {
    if (y - 3 >= 0) {
      for (let i = 0; i < 4; i++) {
        answerInput += matrix[y - i][x];
        if (answerInput.length == 4) {
          wordChecker(answerInput)
        }
      }
    }
    answerInput = "";
  }
  function checkLeft(matrix, x, y) {
    if (x - 3 >= 0) {
      for (let i = 0; i < 4; i++) {
        answerInput += matrix[y][x - i];
        if (answerInput.length == 4) {
          wordChecker(answerInput)
        }
      }
      answerInput = "";
    }
  }
  function checkRight(matrix, x, y) {
    if (x + 3 < matrix[0].length) {
      for (let i = 0; i < 4; i++) {
        answerInput += matrix[y][x + i];
        if (answerInput.length == 4) {
          wordChecker(answerInput)
        }
      }
      answerInput = "";
    }
  }

  function checkDiagonallyUpLeft(matrix, x, y) {
    if (x - 3 >= 0 && y - 3 >= 0) {
      for (let i = 0; i < 4; i++) {
        answerInput += matrix[y - i][x - i];
        if (answerInput.length == 4) {
          wordChecker(answerInput)
        }
      }
      answerInput = "";
    }
  }

  function checkDiagonallyUpRight(matrix, x, y) {
    if (x + 3 < matrix[0].length && y - 3 >= 0) {
      for (let i = 0; i < 4; i++) {
        answerInput += matrix[y - i][x + i];
        if (answerInput.length == 4) {
          wordChecker(answerInput)
        }
      }
      answerInput = "";
    }
  }
  function checkDiagonallyDownLeft(matrix, x, y) {
    if (x - 3 >= 0 && y + 3 < matrix.length - 1) {
      for (let i = 0; i < 4; i++) {
        answerInput += matrix[y + i][x - i];
        if (answerInput.length == 4) {
          wordChecker(answerInput)
        }
      }
      answerInput = "";
    }
  }
  function checkDiagonallyDownRight(matrix, x, y) {
    if (x + 3 < matrix[0].length && y + 3 < matrix.length - 1) {
      for (let i = 0; i < 4; i++) {
        answerInput += matrix[y + i][x + i];
        if (answerInput.length == 4) {
          wordChecker(answerInput)
        }
      }
      answerInput = "";
    }
  }

  function wordChecker(input) {
    if (input === "XMAS") {
      xMasCount++
    }
  }

  checkDown(matrix, x, y)
  checkUp(matrix, x, y)
  checkLeft(matrix, x, y)
  checkRight(matrix, x, y)
  checkDiagonallyUpLeft(matrix, x, y)
  checkDiagonallyUpRight(matrix, x, y)
  checkDiagonallyDownLeft(matrix, x, y)
  checkDiagonallyDownRight(matrix, x, y)

}
console.log("XMAS count:", xMasCount)
