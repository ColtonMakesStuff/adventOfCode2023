const exampleData = 
`Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

// i need to write a regex taht will make this data look like this


export const splitStringByLines = (string) => {
    let lines = string.split(/\r?\n/);
    return lines;
    }

    function findSum(arr) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
          sum += arr[i];
      }
      return sum;
  }
  

  export const testGames = (string) => {
    
      let splitString = splitStringByLines(string);
    // Regular expression pattern to match number and color name
    let regex = /(\d+)\s+(\w+)/g;
    
    // Object to store number and color name
    console.log(splitString);
    let indexArray = [];
    // Find all matches and extract number and color name
    let match;
    

    splitString.forEach((element, index) => {
      let possibleGame = true;
    while ((match = regex.exec(element)) !== null) {
      const number = parseInt(match[1]);
      const colorName = match[2];
      colorName === "red" && number > 12 ? possibleGame = false : null;
      colorName === "green" && number > 13 ? possibleGame = false : null;
      colorName === "blue" && number > 14 ? possibleGame = false : null;
      
    }
    possibleGame ? indexArray.push(index + 1) : null; 
  })
    let sum = findSum(indexArray);
    return sum
    }

    
const sumOfValidGames = testGames(exampleData);
console.log(sumOfValidGames);
    
export const findMinimum = (string) => {
// i need to find the minmum number of cubes needed to make a game
let splitString = splitStringByLines(string);

let regex = /(\d+)\s+(\w+)/g;

let match;
let powerArray = [];
splitString.forEach((element, index) => {
  let minimumObject = {
    red: 0,
    green: 0,
    blue: 0
  };
while ((match = regex.exec(element)) !== null) {
  const number = parseInt(match[1]);
  const colorName = match[2];
  colorName === "red" && minimumObject.red < number ? minimumObject.red = number : null;
  colorName === "green" && minimumObject.green < number ? minimumObject.green = number : null;
  colorName === "blue" && minimumObject.blue < number ? minimumObject.blue = number : null;
  
}
powerArray.push(minimumObject.red * minimumObject.green * minimumObject.blue);
})
let sum = findSum(powerArray);
return sum
}