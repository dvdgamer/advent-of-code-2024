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
const answerArray = [];

const numberArray = [];

// Convert part1 into an array of objects
const arrayOfObjects = [];

for (let i = 0; i < part1Lines.length; i++) {
  const [x, y] = part1Lines[i].split("|");
  arrayOfObjects.push({ x, y });
}


let safe = true;
let safeLines = [];
for (const object of arrayOfObjects) {
  // object.x
  // object.y

  // Loops through every line in part2Lines
  for (let i = 0; i < part2Lines.length; i++) {
    const line = part2Lines[i];

    // check if object.x shows up before object.y
    if (
      line.indexOf(object.x) < 0 ||
      line.indexOf(object.y) < 0 ||
      line.indexOf(object.x) > line.indexOf(object.y)
    ) {
      safe = false;
    } else {
      safe = true;
      console.log(line.indexOf(object.x), "object.x", object.x)
      console.log(line.indexOf(object.y), "object.y", object.y)

      if (safe) {
        safeLines.push([i])
      }
    }

    // console.log("line nr:", [i])
    // console.log("safeLines", safeLines)

    // const occurrences = safeLines.reduce(function (acc, curr) {
    //   return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    // }, {});
    // console.log(occurrences)

    //push to numberArray
    // when array == line.length check if safe
    // if safe push to safeArray
  }
}

// If it is true push them into an array
// extract and sum the middle number of every array
