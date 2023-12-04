const exampleData = 
`...............................930...................................283...................453.34.............................867....282....
....=.........370...........................48..456......424...-.341*.....554...*807.571............971..958............166......*..........
..159.........../..........539*.....73......-...*.......+....954.........*.....7.......*........*.....*....*.....405$..*.......31.........15
...............................873..*............726.............94.......126.........699....253....584..750................................
.660.................................336.....391.................*....860......76..................................435....576.....-.........
.................................888............*924...55......308.......*91.........446...535......87...136/........*...*........793.=351..
...........826...949...120...985..&....................*.......................462.../......*.........*.......358..932..599.479*............
............../.....%..*......%...............151.304..931..471.......601.....*............765........805....%..................149...345...
........................216..........................+......*............#..906...-......................................105...........&....
.......&..827*327.375-.................923.......*..........630......851..........459..656.......340.432........915.288....#.865*...........`;

// i need to write a regex taht will make this data look like this
// 270429 25920 451143 24528 361284 331056 51205 296730 28952 69840 78260 418572 5649 399129 409275 567064 70035 718500 405420 345024 71371 26877 
console.log((872 * 372) + (120 * 216) + (539 * 873) + (73 * 336) + (456 * 726) + (391 * 924) + (55 * 931) + (471 * 630) + (94 * 308) + (860 * 91) + (554 * 126) + (906 * 462) + (7 * 807) + (571 * 699) + (535 * 765) + (971 * 584) + (87 * 805) + (958 * 750) + (435 * 932) + (576 * 599) + (479 * 149) + (867 * 31)) 
// const findAllNonNumbers = (string) => {
// let regex = /[^0-9.]/g;
// let matches = string.match(regex);
// let symbols = []
// matches.forEach((element, index) => {
//   if (symbols.includes(element) === false) {
//     symbols.push(element);
//   }
// })
// return symbols;}

// console.log(findAllNonNumbers(exampleData));

// regex to split string by lines into an array
const splitStringByLines = (string) => {
    let lines = string.split(/\r?\n/);
    console.log(lines);
    return lines;
  }

// Function to find sum of an array
const findSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
  }
  
// console.log(splitStringByLines(exampleData));




export const findPartNumbers = (string) => {

let splitString = splitStringByLines(string);

// Regular expression pattern to match number and color name
let findNumberIndexRegex = /(\d+)/g;

let numberArray = [];
// the g is for global so it doesnt stop at the first match
// \d is for any digit (this is how we will get the index of the number)
// the + is for one or more of the preceding token (this is how we get the whole number for the addition)


// iterate through the array of strings
for (let i = 0; i < splitString.length; i++){ 
    let match;

    // iterate through each string and find the index of the number
  while ((match = findNumberIndexRegex.exec(splitString[i])) !== null) {
    let isAPart = false
    let number = `${parseInt(match)}`;
    // console.log(number);
    
    let index = match.index;

    // i need to find the indices of the number 
        let indexArray = [];
    for (let i = 0; i < number.length; i++) {
      indexArray.push(index + i);
    }

    // i need to check the index before and after the number to see if they are a part identifier
    indexArray[indexArray.length -1] !== splitString[i].length ? indexArray.push( indexArray[indexArray.length -1] + 1): null;
    indexArray[0] !== 0 ? indexArray.push(indexArray[0] - 1): null;

    let strings = [];
    //if it is not the first string in the array then i need to check the string above the number
    if (i !== 0) {
      strings.push(splitString[i - 1]);
    }
    // i need to check the string that the number is in
    strings.push(splitString[i]);
    // if it is not the last string in the array then i need to check the string below the number 
    if (i!== splitString.length -1) {
      strings.push(splitString[i + 1]);
    }

    // this will check the strings above and below the number to see if they are a part identifier
    strings.forEach((str, i) => {
      let matches = false;
      // this regex will match anything that is not a number or a period or a new line
      indexArray.forEach((index) => {
        let regex = /[^0-9.\n]/;
        let char = str.charAt(index);
        // if the character is not a number or a period or a new line then it is a part identifier
        if (regex.test(char)) {
          matches = true;
        }
      // this will return an array of all the matches
      })
      
      
      // if there are matches then it is a part
      if (matches) {
        isAPart = true;
      }
      // console.log(isAPart);
     });

    // if it is a part then i need to push the number into an array
    if (isAPart) {
      numberArray.push(Number(number));
    }
   }
// console.log(numberArray);
   


  }

let sum = findSum(numberArray);

  return sum;
}


export const findGearNumbers = (string) => {

  let splitString = splitStringByLines(string);
  let findNumberIndexRegex = /(\d+)/g;
  
  let gearData = [];
  for (let i = 0; i < splitString.length; i++){ 
      let match;
    while ((match = findNumberIndexRegex.exec(splitString[i])) !== null) {
      let number = `${parseInt(match)}`;
      let index = match.index;
          let indexArray = [];
      for (let j = 0; j < number.length; j++) {
        indexArray.push(index + j);
      }
      indexArray[indexArray.length - 1] !== splitString[i].length ? indexArray.push( indexArray[indexArray.length -1] + 1): null;
      indexArray[0] !== 0 ? indexArray.push(indexArray[0] - 1): null;
      let strings = [];
      //if it is not the first string in the array then i need to check the string above the number
      if (i !== 0) {
        strings.push(splitString[i - 1]);
      } else { strings.push(``)}
      // i need to check the string that the number is in
      strings.push(splitString[i]);
      // if it is not the last string in the array then i need to check the string below the number 
      if (i !== splitString.length -1) {
        strings.push(splitString[i + 1]);
      } else { strings.push(``)}

  //  console.log(`
  //  ${number} test strings are:
  //  ______________
  //  ${strings[0]}
  //  ${strings[1]}
  //  ${strings[2]}
  //  ______________

  //  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
  
      for (let k = 0; k < strings.length; k++) {
        for(let l = 0; l < indexArray.length; l++) {
          let char = strings[k].charAt(indexArray[l]);
          if (char === `*`) {
              let row;
              if (k === 0) {
                row = i - 1;
              } else if (k === 1) {
                row = i;
              } else if (k === 2) {
                row = i + 1;
              }
            
            // console.log(`   ^^^^^this is a potential gear
            // the row is ${row}
            // the index is ${index}
            // the number is ${number}`);
            let isGearData = {
              row: row,
              index: indexArray[l],
              number: number,
            }
            gearData.push(isGearData);
          }
        }
       };
     }
    }
  return gearData
  }
  
  // console.log(findGearNumbers(exampleData));
  






export const findTotalGearRatio = (input) => {
let gearData = findGearNumbers(input);
let gearMatches = [];
console.log(gearData);
// for as many potential gears as there are
for (let i = 0; i < gearData.length; i++) {
// let the row to match be the row of the potential gear
let matchThisRow = gearData[i].row;
// let the index to match be the index of the potential gear
let matchThisIndex = gearData[i].index;
// find all the gears that match the row and index of the potential gear and push them into an array
let matchingObjects = gearData.filter(obj => obj.row === matchThisRow && obj.index === matchThisIndex );
//  console.log(matchingObjects);
// i need to multiply the numbers of the matching gears together
let matchingIdData = {
    uid: `${matchThisRow}${matchThisIndex}`,
    number: gearData[i].number,
}
if (matchingObjects.length === 2) {
  gearMatches.push(matchingIdData);
}
}
const uniqueUids = Array.from(new Set(gearMatches.map(item => item.uid)));
let gearRatios = 0;
console.log(gearMatches)
for (let i = 0; i < uniqueUids.length; i++) {
  let matchingNumbers = gearMatches.filter(obj => obj.uid === uniqueUids[i]);
  // this is a reduce function that multiplies all the numbers together by taking an initial value of 1 and multiplying it by the number of each object in the array
  let product = matchingNumbers[0].number * matchingNumbers[1].number;
console.log(product);
  // console.log(gearRatios)
  gearRatios += product;
}

// console.log(gearRatios);
return gearRatios
}

  console.log(findTotalGearRatio(exampleData));


// i need to find a way to find the number, take the position before and after it and if they are the = to a part identifier and take that whole section and check the positions above and below it to see if they are the = to a part identifier 
// if it is a part identifier i need to push the index of that row into an array
// then i need to find the sum of that array

