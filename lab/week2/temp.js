/*
Take in two values from the terminal: A number and the text "toF" or "toC"

Test the number to make sure it can be converted to JavaScript datatype. If a number is given, show an "error" message and end the process, otherwise continue.

Check if second argument is the value "toF" or "toC". If it is given, run the appropiate math equation to convert the number. Display the results in the terminal. If none "toC" or "toF", show an "error" message that describes both choices. 
*/

// Rename the process.argv variable to arguments.
let arguments = process.argv;

// console.log(arguments[2]);

if (arguments[2] === undefined) {
    console.log("Greetings! This is a temperature converter")
    
}
let number = parseFloat(arguments[2]);

if (Number.isNaN(number)) {
    console.log("The number provided is not valid! Please use 0 to 9 numbers only including decimals.");
} else 

    // If a value in the third argument of the command, try to convert such value into a number.
    if (arguments[3] === "toC") {
        let resultsC = (number - 32) * (5 / 9);

        console.log("The temperature " + number + " in Celsius is " + resultsC.toFixed(1) + "F in Celsius is " + resultsC);

    } else if (arguments[3] === "toF") {
        
        let resultsF = (number * (9 / 5)) + 32;
        console.log("The temperature " + number + " C in Fahrenheit is " + resultsF.toFixed(1) + "C in Fahrenheit is " + resultsF);
    
    } else {
        console.log("");
    }