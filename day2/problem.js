// import { input } from "./input.js";

const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;
const inputArray = input.split("\n")


let increasingArrays = [];
let decreasingArrays = [];
let safeArray = [];

// loops through array
for (let i = 0; i < inputArray.length; i++) {
  const element = inputArray[i].split(" ");

  // loops through element
  let count = 0;
  for (let j = 0; j < element.length; j++) {
    const curr = element[j];
    const next = element[j + 1];

    if (curr + 3 <= next && next >= curr + 1) {
      count++
    } else if (curr - 3 <= next && next <= curr - 1) {
      count--
    }
  }
  console.log("count", count)
  if (Math.abs(count) === element.length - 1) {
    safeArray.push(element)
  }
}

console.log(safeArray)
