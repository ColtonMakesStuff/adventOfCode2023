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




export const findCardTotal = (string) => {
//  you win copies of the scratchcards below the winning card 
//  the anount of cards to copy is equal to the number of matches
//  for each match you win you get a copy of the cards below it 
//  Copies of scratchcards are scored like normal scratchcards and have the same card number as the card they copied
//  i thinking some sort of nesteed loop to check each card against the cards below it
// maybe i can do some example problems first

//for each card
// check for matches
// if are matches then add the number of matches to the total
// for each match
// check the match amount of cards below it for matches

// inititalise total
let total = 0;
// split each string into an array of strings
string = splitStringByPipes(string);
console.log(string);
let cardArray = [];
// loop through each card
for (let i = 0; i < string.length; i++) {

// inititalise matches
let matches = 0
// regex to find numbers in the string
let regex = /(\d+)/g;

// inititalise arrays to store the numbers in each part of the card
      let arrayPartOne = [];
      let arrayPartTwo = [];
      // inititalise match
  let match;

  // find all the numbers in the first part of the card and push them into an array
  while ((match = regex.exec(string[i][0])) !== null) {
    let number = `${parseInt(match)}`;
    arrayPartOne.push(number);
  }

  // find all the numbers in the second part of the card and push them into an array
  while ((match = regex.exec(string[i][1])) !== null) {
    let number = `${parseInt(match)}`;
    arrayPartTwo.push(number);
  }
  // console.log(arrayPartOne);
  // console.log(arrayPartTwo);
  
// loop through the second part of the card and check if the numbers are in the first part of the card
for (let j = 0; j < arrayPartTwo.length; j++) {
 if (arrayPartOne.includes(arrayPartTwo[j])) {
  //  if there is a match then add one to the matches
   matches += 1;
 }
}
cardArray.push(
  {
    cardNumber: i + 1,
    value: matches,
    instanceOf: 1
  }
);

}
//for each of the cards
let cardTotal = 0;
for (let i = 0; i < cardArray.length; i++) {
  // i want to take the next series of cards equal to the value of the card
  // then i want to increase their instanceOf value by the intanceOf value of the card
  // i want to add the instanceOf value of the card to the total
  // console.log(
  //   `_________________________________________________________

  //   i am on card ${cardArray[i].cardNumber}
  //   it has a value of: ${cardArray[i].value} 
  //   and an instance of: ${cardArray[i].instanceOf}`);
    let cardToCheck = i + 1;
    if (cardArray[i].value > 0) {
for (let j = 1; j <= cardArray[i].value; j++) {
  // console.log(`i am on card ${cardToCheck}`);
  if (cardToCheck < cardArray.length) {
    cardArray[cardToCheck].instanceOf += cardArray[i].instanceOf;
    cardToCheck += 1;
}
}
}
cardTotal += cardArray[i].instanceOf;

// console.log(`i checked ${cardArray[i].value} cards`);
}
// console.log(cardTotal);
let test = "this is a test";
return cardTotal;



}

console.log(findCardTotal(exampleData));

