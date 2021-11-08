// Node.js Accepting Arguments.

// Node. js Argument global variable. It holds an array of the pieces of the text from the command line (GitBash or C:/).
// console.log(process.argv);

// Gets the value in the index 2 of the process.argv, and try to convert it to a number.
let number1 = parseInt(process.argv[2]);

// Gets the value in the index 2 process.argv in two lines of code. Tries to conver value into a number.
let number2 = process.argv[3];
number2 = parseInt(number2);

// Check if the values provided were converted into actual JavaScript number datatype.
if (Number.isNaN(number1) || Number.isNaN(number2)) {
    
    // If it does't, then the console log this mesage.
    console.log("Sorry but one of the values you provided is not a valid number.")
} else {
    
    // Otherwise run these lines to add values and send them to console log as sentence.
    let sum = number1 + number2;
    
    let sentence = "The sum of " + number1 + " and " + number2 + " is " + sum + ".";

    console.log(sentence);
}
