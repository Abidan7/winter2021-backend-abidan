const fs = require("fs");

// Check if a file a exists using fs.exists()

// The ! flips the exist boolean, i.e. false to true and true to false.
if (!fs.existsSync("log.txt")) {
    fs.writeFileSync("log.txt", "", "utf-8");
}

// Rename process.argv into arguments.
let arguments = process.argv;

// Grab the  3rd (index2) item in the argument's array. 
let input = arguments[2];

//Read existing text in log.txt and save it to the variable existingContent.
let exisitingContent = fs.readFileSync("log.txt", "utf-8");

// Add the input value on a new line to the existing content.
exisitingContent = exisitingContent + "\n" + input;

// Write the log.txt file with the existingContent string.
fs.writeFileSync("log.txt", exisitingContent, "utf-8")