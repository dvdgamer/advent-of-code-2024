// import { input } from "./input.js";

const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

const addedElements = new Set();
const inputArray = input.split("\n");

let safeArray = [];
let safeCount = 0;

function isSafe(element) {
  let count = 0;
  for (let j = 0; j < element.length - 1; j++) {
    const curr = element[j];
    const next = element[j + 1];

    if (next >= curr - 3 && next <= curr - 1) {
      count--;
    } else if ((next > curr) && next < (curr + 4)) {
      count++;
    } else {
      return false;
    }
  }
  return Math.abs(count) > element.length - 3;
}

// loops through array
for (let i = 0; i < inputArray.length; i++) {
  const element = inputArray[i].split(" ").map(Number);

  if (isSafe(element)) {
    const elementString = `${i}:${element.join(',')}`;
    if (!addedElements.has(elementString)) {
      safeCount++;
      safeArray.push(element);
      addedElements.add(elementString);
    }
  } else {
    // Try removing each level one by one
    for (let j = 0; j < element.length; j++) {
      const newElement = element.slice(0, j).concat(element.slice(j + 1));
      console.log(newElement)
      if (isSafe(newElement)) {
        const elementString = `${i}:${newElement.join(',')}`;
        if (!addedElements.has(elementString)) {
          safeCount++;
          safeArray.push(newElement);
          addedElements.add(elementString);
          break;
        }
      }
    }
  }
}

console.log("safeArray :", safeArray);
console.log("safeCount :", safeCount);
