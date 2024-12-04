import fs from "node.fs";

function getInput(location) {
  const data = fs.readFileSync(String(location), "utf-8");
  return data;
}
function solution1() {
  const input = getInput(
    // "/home/david/code/dvdgamer/fuck-around/advent-of-code-2024/src/bin/day3/input.js"
    "./input.txt"
  )
  console.log(input)
}
solution1();
