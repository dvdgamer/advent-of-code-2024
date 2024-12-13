import fs from "fs";

// const input =
//   `47|53
// 97|13
// 97|61
// 97|47
// 75|29
// 61|13
// 75|53
// 29|13
// 97|29
// 53|29
// 61|53
// 97|53
// 61|29
// 47|13
// 75|47
// 97|75
// 47|61
// 75|61
// 47|29
// 75|13
// 53|13

// 75,47,61,53,29
// 97,61,53,29,13
// 75,29,13
// 75,97,47,61,53
// 61,13,29
// 97,13,75,29,47`;

const input = fs.readFileSync('src/bin/day5/input.txt').toString()

const parts = input.split("\n\n");
const pages = parts[0];
const updates = parts[1];

const pagesLines = pages.split("\n");
const updatesLines = updates.split("\n")

const safeLines = [];
let unsafeLines = [];
let stillUnsafeLines = [];

// Convert part1 into an array of objects
const arrayOfObjects = [];
for (let i = 0; i < pagesLines.length; i++) {
  const [x, y] = pagesLines[i].split("|");
  arrayOfObjects.push({ x, y });
}

// Removes pushed -1
function minusOneRemover(array) {
  for (const line of array) {
    // Delete all the -1 pushed onto the array
    const indexOfminusOne = line.indexOf(-1)

    if (indexOfminusOne > 0) {
      const numberOfminusOnes = line.length - indexOfminusOne;
      line.splice(line.indexOf(-1), numberOfminusOnes)
    }
  }
}

const swapElements = (arr, x, y) => {
  [arr[x], arr[y]] = [arr[y], arr[x]];

  return arr;
};

function safeOrUnsafe(array, safeArray, unsafeArray) {
  for (let i = 0; i < array.length; i++) {
    let line = array[i];
    // console.log("line", line)

    if (typeof line === "string") {
      line = line.split(",")
    }

    const lineSize = line.length;
    for (const object of arrayOfObjects) {
      // check if the items are present in the array
      if (
        line.indexOf(object.x) === -1 ||
        line.indexOf(object.y) === -1
      ) {
        // if it fails the check, add element to change size of the array
      } else if (line.indexOf(object.x) > line.indexOf(object.y)) {
        swapElements(line, line.indexOf(object.x), line.indexOf(object.y))
        line.push(-1)
      }
    }
    if (line.length === lineSize) {
      safeArray.push(line)
    } else {
      unsafeArray.push(line)
    }
    minusOneRemover(unsafeArray)
  }
}
let sum = 0;

safeOrUnsafe(updatesLines, safeLines, unsafeLines);
sumMiddleNumber(safeLines)

function processUnsafeLines(unsafeLines) {
  stillUnsafeLines = [];

  for (let i = 0; i < unsafeLines.length; i++) {
    const line = unsafeLines[i];
    const lineSize = line.length;

    for (const object of arrayOfObjects) {
      // check if the items are present in the array
      if (
        line.indexOf(object.x) === -1 ||
        line.indexOf(object.y) === -1
      ) {
        // if it fails the check, add element to change size of the array
      } else if (line.indexOf(object.x) > line.indexOf(object.y)) {
        swapElements(line, line.indexOf(object.x), line.indexOf(object.y));
        line.push(-1);
      }
    }

    if (line.length !== lineSize) {
      stillUnsafeLines.push(line);
      minusOneRemover(stillUnsafeLines);
    }
  }

  return stillUnsafeLines;
}

sum = 0;

processUnsafeLines(unsafeLines)

while (unsafeLines.length > 0) {
  sumMiddleNumber(unsafeLines)
  unsafeLines = processUnsafeLines(unsafeLines);
}

function sumMiddleNumber(array) {
  for (const line of array) {
    const index = Math.floor(line.length / 2)
    sum += Number(line[index])
    console.log("sum", sum)
  }
}
