const express = require("express");
const app = express();
const http = require("http").Server(app);
const Car = require("./Car.js");
// import {Car} from "./Car.js";

app.use(express.json({strict: false}));
app.use(express.urlencoded({extended: true}));

const port = 3000;
http.listen(port);

console.log("Express server is running on port " + port);

app.use("/", express.static("public_html/"));

// Express End

let honda = new Car({
    name: "Honda",
    make: "Honda",
    model: "Accord",
    occupancy: 5,
    purchased: new Date("05/21/2019"),
}, {
    year: 2010,
    vin: "XXXXXxaergs3f54",
    bodyType: "sedan",
    gvwr: 4575,
    wheels: 4,
    doors: 4,
    engineHP: 300,
    fuelType: "gasoline",
    fuelCap: 20,
    mpg: 15,
    miles: 110000,
    lastMaintMiles: 105000,
    currentFuelLevel: 12,
    owner: "Eduardo"
});

honda.run(50);
honda.run(500);

honda.refuel(50);
honda.checkMaintenance();

console.log("Odometer reads: " + honda.miles + " miles.");