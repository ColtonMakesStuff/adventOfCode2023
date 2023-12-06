const exampleData = 
`79 14 55 13`;

const exampleDataPartTwo =
`seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`;

const splitStringByGaps = (string) => {
    let sections = string.split(/\n\s*\n/g);
    return sections;
  }
// let plantingSections = splitStringByGaps(exampleDataPartTwo);
// console.log(plantingSections);
// regex to split string by lines into an array

const splitStringByLines = (string) => {
    let lines = string.split(/\n/g);
    return lines;
  }

// for (let i = 0; i < plantingSections.length; i++) {
//     plantingSections[i] = splitStringByLines(plantingSections[i]);
//   }
//   console.log(plantingSections);
const removeTitle = (string) => {
    let lines = string.replace(/.*map:\s/g, "");
    return lines;
  }
// for (let i = 0; i < plantingSections.length; i++) {
//     plantingSections[i] = removeTitle(plantingSections[i]);
//   }
const splitStringBySpaces = (string) => {
    let lines = string.split(/\s/);
    return lines;
  }
// for (let i = 0; i < plantingSections.length; i++) {
//     plantingSections[i] = splitStringBySpaces(plantingSections[i]);
//   }



  // console.log(plantingSections);  


// const seeds = splitStringBySpaces(exampleData)

// let equalsAny = false;

// for (let i = 0; i < seeds.length; i++) {
//     seeds[i] = parseInt(seeds[i]);
//     if (seeds[i] > plantingSections[0][1] && seeds[i] < plantingSections[0][2]) {
//         equalsAny = true;
//         let newSeed = seeds[i] + (plantingSections[0][0] - plantingSections[0][1]);
//         console.log(newSeed);
//     }
//   }

const readPlantingMap = (plantingMap, seeds) => {
    let plantingSections = splitStringByGaps(plantingMap);
      
    for (let i = 0; i < plantingSections.length; i++) {
        plantingSections[i] = removeTitle(plantingSections[i]);
      } 
      
    for (let i = 0; i < plantingSections.length; i++) {
        plantingSections[i] = splitStringByLines(plantingSections[i]);
      }
    
    for (let i = 0; i < plantingSections.length; i++) {
      for (let j = 0; j < plantingSections[i].length; j++) {
        plantingSections[i][j] = splitStringBySpaces(plantingSections[i][j]);
        plantingSections[i][j] = plantingSections[i][j].map((element) => {
          return parseInt(element);
        })
      }    
    }

seeds = splitStringBySpaces(seeds);
seeds = seeds.map((element) => {
    return parseInt(element);
})

    
    return {plantingSections, seeds};
}

let {plantingSections, seeds} = readPlantingMap(exampleDataPartTwo, exampleData);

 console.log(plantingSections);
 console.log(seeds);