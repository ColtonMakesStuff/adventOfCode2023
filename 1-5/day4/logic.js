const exampleData = 
`Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;


// regex to split string by lines into an array
const splitStringByLines = (string) => {
    let lines = string.split(/\r?\n/);
    return lines;
  }
console.log(splitStringByLines(exampleData));
// Function to find sum of an array
const findSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
  }


// console.log(splitStringByLines(exampleData));

const sanitizeString = (string) => {
    let splitString = splitStringByLines(string);
    let regex = /Card[ \t]+\d+:/g;
    let sanitizedString = splitString.map((element) => {
        return element.replace(regex, "");
    })
    return sanitizedString;
}
console.log(sanitizeString(exampleData)); 

const splitStringByPipes = (string) => {
    let splitString = sanitizeString(string);
    let splitStringByPipes = splitString.map((element) => {
        return element.split("|");
    })
    return splitStringByPipes;
}
console.log(splitStringByPipes(exampleData));

export const findMatches = (string) => {

let total = 0;

 string = splitStringByPipes(string);
console.log(string);
for (let i = 0; i < string.length; i++) {
let matches = 0
 let regex = /(\d+)/g;

 let arrayPartOne = [];
  let arrayPartTwo = [];
  let match;
  while ((match = regex.exec(string[i][0])) !== null) {
    let number = `${parseInt(match)}`;
    arrayPartOne.push(number);
  }
  while ((match = regex.exec(string[i][1])) !== null) {
    let number = `${parseInt(match)}`;
    arrayPartTwo.push(number);
  }
//  console.log(arrayPartOne);
//  console.log(arrayPartTwo);
  
for (let j = 0; j < arrayPartTwo.length; j++) {
 if (arrayPartOne.includes(arrayPartTwo[j])) {
   matches += 1;
  //  console.log(matches);
 }
  
}
let miniWinner = 0;
if (matches > 0) {
   miniWinner = 1
for (let h = 1; h < matches; h++) {
miniWinner *= 2;
}
// console.log(miniWinner);
}
// console.log(total);
total += miniWinner;
}
return total;
}
console.log(findMatches(exampleData));