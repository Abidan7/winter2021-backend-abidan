// We need to type this so we can start using Lodash in our code.
const _ = require("lodash");

// Create a random number between 25 and 75
let randomNumber = Math.floor((Math.random() * 50) + 25);

let lodashNumber = _.random(25, 75);

console.log("Node project starting...");

let timeNow = Date.now();
let lodashTimeNow = _.now();

console.log(timeNow);
console.log(lodashTimeNow);
console.log("Created by JavaScript:" + randomNumber);
console.log("Created by Lodash:" + lodashNumber);