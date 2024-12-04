import input from "./input.js";


let list1 = [];
let list2 = [];


const inputArray = input
  .split(/\s/g) // Makes it an array seperated by whitespace
  .filter((e) => e);  // Returns only the truthy values;


// Seperates the lists
let i = 0;
while (i !== inputArray.length) {
  i % 2 === 0 ? list1.push(inputArray[i]) : list2.push(inputArray[i]);
  i++;
}

// Sorts lists
let sortedList1 = list1.sort();
let sortedList2 = list2.sort();

// Gets the differences
let diffs = [];
for (let i = 0; i < list2.length; i++) {
  diffs.push(Math.abs(sortedList1[i] - sortedList2[i]))
}

// // Better solution
// const diffs = sortedList1.map((num, i) => Math.abs(num - sortedList2[i]));


// Gets similarities
let similarities = [];
for (let i = 0; i < list1.length; i++) {
  let currentNr = list1[i]
  let count = 0;
  for (let h = 0; h < list2.length; h++) {
    if (currentNr === list2[h]) {
      count++
    }
  }
  similarities.push(count * currentNr)
};

// // Better solution
// const similarities = list1.map(num =>
//   list2.filter(item => item === num).length * num
// );


// Gets the sum
const answer1 = diffs.reduce((a, b) => a + b, 0)
const answer2 = similarities.reduce((a, b) => a + b, 0)

console.log(answer1);
console.log(answer2);
