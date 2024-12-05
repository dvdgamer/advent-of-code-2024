import fs from "fs";

const input = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;

// const input = getInput("src/bin/day3/input.txt")

const mulRegex = /\mul\(\d{1,3}\b\,\d{1,3}\b\)/g;    // to get mul(... , ...)
const digitRegex = /\d{1,3}\b\,\d{1,3}/g;            // to get digits
const doAndDontRegex = /do\(\)|don\'t\(\)/g;         // to get do() and don't()

const mulMatches = input.match(mulRegex);
const doAndDontMatches = input.match(doAndDontRegex);

const doString = "do";
const dontString = "don't";


console.log(doAndDontMatches);

function getInput(location) {
  const data = fs.readFileSync(String(location), "utf-8");
  return data;
}

function solution1() {
  let sum = 0;

  for (let i = 0; i < mulMatches.length; i++) {
    const element = matches[i]
    const numbers = element.match(digitRegex).toString().split(",");

    sum += numbers[0] * numbers[1];
  }
  console.log("solution 1 result:", sum);
}

// solution1();

function solution2() {

}
