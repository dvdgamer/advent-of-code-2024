// import { input } from "./input.js";

const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

const inputArray = input.split("\n")

let safeArray = [];
let safeCount = 0;

// loops through array
for (let i = 0; i < inputArray.length; i++) {
  const element = inputArray[i].split(" ").map(Number);

  // loops through element
  let count = 0;
  let isValid = true;
  for (let j = 0; j < element.length - 1; j++) {
    const curr = element[j];
    const next = element[j + 1];

    if (next >= curr - 3 && next <= curr - 1) {
      count--;
    } else if ((next > curr) && next < (curr + 4)) {
      count++;
    } else {
      isValid = false;
      break; // If any pair is invalid, break out of the loop
    }
    // console.log([i], "count 1", count)
  }
  // console.log([i],"count 2", count)
  if (isValid && Math.abs(count) == element.length - 1) {
    safeCount++
    safeArray.push(element)
  }
}

console.log("safeArray :", safeArray)
console.log("safeCount :", safeCount)

// (isValid < 2 && Math.abs(count) >= element.length - 2)


// const inputArray = input.split("\n")

// let safeArray = [];
// let safeCount = 0;

// // loops through array
// for (let i = 0; i < inputArray.length; i++) {
//   const element = inputArray[i].split(" ").map(Number);

//   // loops through element
//   let count = 0;
//   let isValid = true;
//   for (let j = 0; j < element.length - 1; j++) {
//     const curr = element[j];
//     const next = element[j + 1];

//     if (next >= curr - 3 && next <= curr - 1) {
//       count--;
//     } else if ((next > curr) && next < (curr + 4)) {
//       count++;
//     } else {
//       isValid = false;
//       break; // If any pair is invalid, break out of the loop
//     }
//     // console.log([i], "count 1", count)
//   }
//   // console.log([i],"count 2", count)
//   if (isValid && Math.abs(count) == element.length - 1) {
//     safeCount++
//     safeArray.push(element)
//   }
// }

// console.log("safeArray :", safeArray)
// console.log("safeCount :", safeCount)
