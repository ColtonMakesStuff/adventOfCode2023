import { inputString } from "./data.js";
import { solutionAttemptOne } from "./logic.js";
import {splitStringByLines} from "./logic.js";

console.log("Hello World, this is Colton js for the day 1 task");

 const input = splitStringByLines(inputString);
 console.log(solutionAttemptOne(input));