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

    console.log(splitStringByLines(exampleData));


    const colorsString = "3 green, 4 blue, 1 red 3 purple 1 green";

    // Regular expression pattern to match number and color name
    let regex = /(\d+)\s+(\w+)/g;
    
    // Object to store number and color name
    const colorNumbers = {};
    
    // Find all matches and extract number and color name
    let match;
    while ((match = regex.exec(colorsString)) !== null) {
      const number = parseInt(match[1]);
      const colorName = match[2];
      colorNumbers[colorName] = number;
    }
    
    console.log(colorNumbers);

     regex = /(\d+)\s+(\w+)/g;
const str = '42 apples, 7 oranges, and 3 bananas';
const matches = str.match(regex);

console.log(matches);
    // Output: { green: 3, blue: 4, red: 1 }
    