import {inputString} from "./data.js";

const testInput=[
"1abc2",
"pqr3stu8vwthreex",
"atwo1b2c3d4e5f",
"treb7uchetone"
];



export const splitStringByLines = (string) => {
let lines = string.split(/\r?\n/);
return lines;
}



const str = "one apple, two oranges, three bananas";

const sanitizeString = (string) => {
const replacements = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    oneight: 18,
    twone: 21,
    sevenine: 79,
    fiveight: 58,
    eightwo: 82,
    nineight: 98
  };
  const regex = /oneight|twone|sevenine|fiveight|threeight|eightwo|nineight|one|two|three|four|five|six|seven|eight|nine/gi;
  const result = string.replace(regex, match => replacements[match.toLowerCase()]);
  return result; 
}

export const solutionAttemptOne = (input) => {
    let sanitizedInput = [];
    input.forEach((item) => {
        item = sanitizeString(item);
        sanitizedInput.push(item);
    });
    input = [...sanitizedInput];
    // console.log(input);
    let result = [];
    let finalResult = [];
    let regex = /[0-9]/g;
    input.forEach((item) => {
        let temp = item.match(regex);
        // console.log(temp);
        result.push(temp.join(""));
    });
    result.forEach((item) => {
        let firstInt = item[0]
        let lastInt = item[item.length-1];
        let int = firstInt + "" + lastInt;
        finalResult.push(int);
    });
    let sum = 0
    console.log(finalResult);
    finalResult.forEach((item) => {
        sum += parseInt(item);
    }
    )
    return sum;
}

console.log(solutionAttemptOne(testInput));