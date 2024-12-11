const input =
  `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`;

const parts = input.split("\n\n");
const part1 = parts[0];
const part2 = parts[1];

const part1Lines = part1.split("\n");
const part2Lines = part2.split("\n")

const safeLines = [];

// Convert part1 into an array of objects
const arrayOfObjects = [];

for (let i = 0; i < part1Lines.length; i++) {
  const [x, y] = part1Lines[i].split("|");
  arrayOfObjects.push({ x, y });
}

let safe = true;

for (let i = 0; i < part2Lines.length; i++) {
  let line = part2Lines[i];
  line = line.split(",")

  const lineSize = line.length;

  for (const object of arrayOfObjects) {
    // check if the items are present in the array
    if (
      line.indexOf(object.x) === -1 ||
      line.indexOf(object.y) === -1 ||
      undefined
    ) {
      // add element to change size of the array
    } else if (line.indexOf(object.x) > line.indexOf(object.y)) {
      line.push(1)
    }
  }
  if (line.length === lineSize) {
    safeLines.push(line)
  }
}
console.log(safeLines)

// sum the middle item of each safe Line
let sum = 0;

for (const line of safeLines) {
  const index = Math.floor(line.length / 2)

  sum += Number(line[index])
}

console.log("answer is:", sum)
