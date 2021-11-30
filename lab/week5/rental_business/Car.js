// Import allows to bring in specific variable names (inside the curly braces) from specific file (inside the double quotes).

// import {Vehicle} from "./Vehicle.js";
const Vehicle = require("./Vehicle.js");

class Car extends Vehicle {
    constructor(superData, subData) {
        super(superData);
        this.year = subData.year;
        this.vin = subData.vin;
        this.bodyType = subData.bodyType;
        this.gvwr = subData.gvwr;
        this.doors = subData.doors;
        this.wheels = subData.wheels;
        this.engineHP = subData.engineHP;
        this.miles = subData.miles;
        this.lastMaintMiles = subData.lastMaintMiles;
        this.fuelType = subData.fuelType;
        this.fuelCap = subData.fuelCap;
        this.mpg = subData.mpg;
        this.fuelCurrent = subData.fuelCurrent;
        this.owner = subData.owner; 
    }

    run(miles) {
        let maxDistance = this.fuelCurrent * this.mpg;
        
        if (miles <= maxDistance) {
            this.fuelCurrent = this.fuelCurrent - (miles / this.mpg);
            // Shorthand for this. = this.
            this.miles += miles;
        console.log(`${this.make} ${this.model} has ${this.fuelCurrent} gallons left.`);
        } else {
            console.log(`${this.make} ${this.model} doesn't have fuel to go that far.`)
        }   
    }

    refuel(gallons) {
        let roomForGas = this.fuelCap - this.fuelCurrent;

        if (roomForGas >= gallons) {
            this.fuelCurrent = this.fuelCurrent + gallons;
            console.log(`Filled up the car with ${gallons} gallons of gas. The vehicle has ${this.fuelCurrent} gallons of gas.`)
        } else {
            this.fuelCurrent = this.fuelCurrent + roomForGas;
            console.log(`Gas tank is full, filled up to maximum of ${this.fuelCap} gallons of gas. You purchased ${roomForGas} gallons of fuel.`)
        }
    }
    
    checkMaintenance() {
        let milesSinceCheck = this.miles - this.milesSinceCheck;

        if (milesSinceCheck >= 10000) {
            console.log(`The ${this.make} ${this.model} needs maintenance!`);
        } else {
            console.log("No maintenance needed at the moment.");
        }
    }
}







class Electric extends Vehicle {
    constructor() {
        super();
        this.vin;
        this.bodyType;
        this.gvwr;
        this.doors;
        this.wheels;
        this.engineHP;
        this.chargeType;
        this.rangeCap;
        this.empg;
        this.rangeCurrent;
        this.owner;
        
    }
}


module.exports = Car;