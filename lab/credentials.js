function mongoDBCredentials() {
    return "mongodb+srv://winter2021-user:ledsonic3@cluster0.zdvju.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
}

let myVariable = 10;

// This privateInfo cannot be accessed as it is not exported to the module.
let privateInfo = 100;

// Lists the variables and functions that can be exported, the property name is what other files need to call, and the value is what the property call will get. 
module.exports = {
    mongoDBCredentials: mongoDBCredentials,
    specialNumber: myVariable
};

