// Setup
const fs = require("fs");
const file = "Street_Tree_List.csv";
let treeObjects;

// fs.existsSync checks if a file exists, returns true if it does, returns false if it doesn't.
if (fs.existsSync(file)) {

    // Reads file and loads ALL of it's contents into data as string datatype.
    let data = fs.readFileSync(file, "utf-8");

    // Splits th data string, by each new line (\n).
    let dataArray = data.split("\n");

    let firstLine = dataArray[0];

    // Splits the first lines by commas.
    let columnTitles = firstLine.split(",");

    // Create a class based on Column Titles.
    class StreetTree {
        constructor(treeData) {

            // Checks if there is empty data when we an object is created.
           if (treeData === undefined || treeData[0] === "" || treeData.lenght === 0 ) {
                console.log("Cannot build Object, empty array provided.");
                 
            } else {

                // Loops through the columnTitles array, and creates a property for each of these Array Elements.
                for (let i = 0; i < columnTitles.length; i++) {
                    
                    // Detects if there is an undefined piece of data, usually a "bad" line. 
                    if (treeData[i] === undefined){
                        console.log(`Undefined Detected for Tree array ID: ${i}`);
                        console.log(treeData);
                    }
                    // Adds the current property with the current data to the object being built.
                    this[columnTitles[i]] = treeData[i];
                }  
            }
        }
    }
    
    // Holds all of our tree objects in this array. 
    treeObjects = [];

    // Create a StreeTree object for every line in our dataset.
    // Let i = 1, skips the first line, instead of line = 0.
    for (let i = 1; i < dataArray.length; i++) {
        let lineArray = dataArray[i].split(",");
        
        let treeObject = new StreetTree(lineArray);

        treeObjects.push(treeObject);
    }
    // console.log(treeObjects[treeObjects.length - 1]);
    // Removes the last empty obejct because dataset has an empty line at the end.
    treeObjects.pop();

    // console.log(treeObjects[0]);

} else {
    // If the file doesn't exist, we mention it in the console.
    console.log("cannot find specified file!");
}

// Answer the following questions:
// What percentage of trees are on a sidewalk?

// Object to hold the tally of all the qSiteInfo properites of ALL trees.
let treeSite = {};

// Goes through each StreetTree object and checks for qSiteInfo values and adds it to the treeSite tally.
for (let i = 0; i < treeObjects.length; i++) {

    let currentTree = treeObjects[i];

    // Checks if the treeSite object has a property that is the same as the current qSiteInfo VALUE.
    if (treeSite.hasOwnProperty(currentTree.qSiteInfo)) {
        treeSite[currentTree.qSiteInfo] += 1;
    } else {
        treeSite[currentTree.qSiteInfo] = 1;
    }
}
// console.log(treeSite);

// Tally the amount of sidewalk vs nonsidewalk trees.
let sidewalkTally = {
    sidewalk: 0,
    nonsidewalk: 0
};

// For ... in loops are for "looping" through object properties. This one is going through each property of treeSite.
for (let site in treeSite) {

    // We break apart the string (by colon) in site which represents the property.
    let siteArray = site.split(":");
    // console.log(siteArray);

    // Check if the first array element holds the word Sidewalk. It doesn't check for space character after the word sidewalk.
    if (siteArray[0] === "Sidewalk") {
        sidewalkTally.sidewalk += treeSite[site];
    } else {
        sidewalkTally.nonsidewalk += treeSite[site];
    }
}
// console.log(sidewalkTally);

// Official answer to question.
let answerQ1 = `The percentage of sidewalk trees vs other trees in San Francisco is ${(sidewalkTally.sidewalk / (sidewalkTally.sidewalk + sidewalkTally.nonsidewalk)) * 100}%.`;

console.log(answerQ1);

// Whats the most frequent Tree Species?
// console.log(treeObjects[38928]);

let treeSpecies = {};

for (let i = 0; i < treeObjects.length; i++) {

    let currentTree = treeObjects[i];

    if (treeSpecies.hasOwnProperty(currentTree.qSpecies)) {
        treeSpecies[currentTree.qSpecies] += 1;
    } else {
        treeSpecies[currentTree.qSpecies] = 1;
    }
}
// console.log(treeSpecies);

let highestSpecies = "";
let highestCount = 0;

delete treeSpecies["Tree(s) ::"];

for (let species in treeSpecies) {
    let currentSpeciesCount = treeSpecies[species];

    if (highestCount < currentSpeciesCount) {
        highestSpecies = species;
        highestCount = currentSpeciesCount
    }
}

// Answer to question:
console.log(`The most frequent tree species seen in the streets of San Francisco is ${highestSpecies}`);


// What trees that have plant date, how many were planted in 1955?
let dates = {};
let noDateCount = 0;

for (let i = 0; i < treeObjects.length; i++) {
    let date = treeObjects[i].PlantDate;

    if (date === "") {
        noDateCount += 1;
        continue;
    }

    let dateArray = date.split (" ");

    // Example: dataArray = ["04/01/2002", "12:00:00", "AM"]

    let monthdayyear = dateArray[0];
    let yearArray = monthdayyear.split("/");
    let year = yearArray[2];

    if (year === "2022") {
        console.log(treeObjects[i]);
    }

    if (dates.hasOwnProperty(year)) {
        dates[year] += 1;
    } else {
        dates[year] = 1;
    }
}
// console.log(dates);
// console.log(noDateCount);

// Answer to question:
console.log(`There were ${dates["1955"]} trees planted in 1955.`)


// How many trees does DPW take care of?
let careTaker = {};

for (let i = 0; i < treeObjects.length; i++) {
    let currentTree = treeObjects[i];

    let owner = currentTree.qCaretaker;

    if (careTaker.hasOwnProperty(owner)) {
        careTaker[owner] += 1;
    } else {
        careTaker[owner] = 1;
    }
}
// console.log(careTaker);

// Answer to question:
console.log(`DPW takes care of ${careTaker["DPW"]} trees.`)


// How many trees are scheduled for removal/cutting out? Not possible to answer if code requires future date.