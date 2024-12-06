import fs from "fs";

const input = getInput("src/bin/day3/input.txt")

const mulRegex = /mul\(\d{1,3}\b\,\d{1,3}\)/g;       // to get mul(... , ...)
const digitRegex = /\d{1,3}\b\,\d{1,3}/g;            // to get digits (..., ...)

const doString = "do()";
const dontString = "don't()";

function getInput(location) {
  const data = fs.readFileSync(String(location), "utf-8");
  return data;
}


let sum = 0;

function multiply(input1) {
  const input = input1.match(mulRegex)

  for (let i = 0; i < input.length; i++) {
    const element = input[i];                          //returns string mul(x,y)
    const matches = element.match(digitRegex)          // returns [ 'x,y' ]
    if (matches) {
      const numbers = matches.toString().split(",");   // returns [ 'x', 'y' ]
      sum += numbers[0] * numbers[1];
    }
  }
  return sum
}
console.log("----------------- solution 1 ---------------------------")
console.log("Sum: ", multiply(input))

function solution2() {
  sum = 0

  console.log("----------------- solution 2 ---------------------------")
  const dontSplitted = input.split(dontString)

  for (let i = 0; i < dontSplitted.length; i++) {
    const element = dontSplitted[i];

    const doSplitted = element.split(doString)

    for (let j = 1; j < doSplitted.length; j++) {
      const element = doSplitted[j];
      multiply(element)
    }
  }
  multiply(dontSplitted[0])
}
solution2()
console.log("Sum:", sum);
