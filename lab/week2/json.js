const fs = require("fs");

let myObject = {
    num1: 100,
    welcomeString: "Goodmorning!",
    isValid: true,
    sayHello: function () {
        console.log("Hello");
    }
};
// If using Node.js, do not name any variables or functions with name "name".
let employee = {
    fname: "Abidan",
    age: 45
}
employee.age = employee.age + 1;


// JSON.stringfy() is a method that allows to convert a JavaScript Object into a JSON string.
let jsonResults = JSON.stringify(myObject);

console.log(jsonResults);

console.log("Writing file...");
fs.writeFileSync("data.json", jsonResults, "utf-8");
console.log("File creation complete.");

// Bringing a JSON file and converting it to a JavaScript Object.
// Read the data.json file.
let jsonText = fs.readFileSync("data.json", "utf-8");

// Convert jsonText string which would hold the json file contents as a string, convert it into javascript object.
let objectFromJSON =  JSON.parse(jsonText);

console.log(jsonText);
console.log(objectFromJSON);

// Access properties of the objects created on JSON.
console.log(objectFromJSON.welcomeString);