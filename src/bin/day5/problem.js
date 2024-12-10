const input = `47|53
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


// Convert part1 into an array of objects
const arrayOfObjects = [];

for (let i = 0; i < part1Lines.length; i++) {
  const [x, y] = part1Lines[i].split("|");
  arrayOfObjects.push({ x, y });
}

// loop through the part2Lines


// On every line loop through arrayOfObjects and confirm if y doesn't show up before x
// If it is true push them into an array
// extract and sum the middle number of every array
