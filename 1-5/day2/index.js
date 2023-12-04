import {testGames} from "./logic.js";
import {inputString} from "./data/data.js";
import { findMinimum } from "./logic.js";

console.log("Hello World, this is Colton using js for the day 2 task");

// const sumOfValidGames = testGames(inputString);
// console.log(sumOfValidGames);

const minimum = findMinimum(inputString);
console.log(minimum);