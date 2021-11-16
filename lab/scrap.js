//
const fs = require("fs");

// .writeFileSync() Write a file to the same folder as JavaScript file. Arguements: File name,

// Synchronous JavaScript. Meaning this line will "block" any following code. It will not run until this lin eis done.
fs.writeFileSync("test.txt", "Hello World, it's you!", "utf-8");
// fs.writeFileSync("veryimportantinfo.txt", "Password: 12345", "utf-8it");

// Asynchronous JavaScript. This line runs but also moves on the code afterwards and it ends independently from the lines of code after it.
// fs.writeFile()


//.readFileSync() Reads a file, returns the contents of the file as a string. Argument: File name, Charracter set.
let fileContents = fs.readFileSync("veryportantinfo.txt", "utf-8");

fileContents = fileContents + "\n This is a new sentence.";

fs.writeFileSync("veryimportantinfo.txt", fileContents, "utf-8");
