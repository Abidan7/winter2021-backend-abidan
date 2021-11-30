
class Animal {
    constructor(data) {    
        this.scienceName = data.sName;
        this.commonName = data.cName;
        this.birthday = data.birthday;
        this.ageYear = (new Date()).getFullYear() - this.birthday.getFullYear();
        this.endangered = data.endangered;
        this.birthLocation = data.birthLocation;
        this.weightLbs = data.weightLbs;
        this.diet = data.diet;
        this.location = "MEDA Zoo";
        this.sex = data.sex;
        this.dangerous = data.dangerous;
    }

    // Getters/Setters for ONE property.
    getEndangered(value) {this.endangered = value;}
    setEndangered() {return this.endangered;}

    describe() {
        console.log(`${this.commonName} is ${this.ageYear} years old, eats ${this.diet}. Currently living at the ${this.location}`);
    }
    
    
    feed() {
        let number = Math.random();
        if (number > .7) {
            console.log(`${this.commonName} is eating ${this.diet}!`);    
        } else {
            console.log(`Please feed the ${this.commonName} with some ${this.diet}, but dones't appear to be hungry.`);
        } 
    }
}

class Mammal extends Animal {
    constructor (data, limbs, pregnant, fur) {
        super(data);

        if (this.sex == "xy") {
            this.pregnant = false;
        } else {
            this.pregnant = pregnant;
        }        
        this.bloodType = "warm";
        this.limbs = limbs;
        this.furType = fur;
    }

    getPregnant() {return this.pregnant}
    setPregnant(value) {
        if (typeof value === "boolean") {
            this.pregnant = value;
        }
    }
    
    mate(partner) {
    
        if (this.scientificName == partner.scientificName) {
    
            if (this.sex == "xx" && partner.sex == "xy") {
                this.pregnant = true;
                console.log(`${this.commonName} is pregnant!`);
            } else if (this.sex == "xy" && partner.sex == "xx") {
                partner.setPregnant(true);
                console.log(`${this.commonName} is pregnant!`);
            } else {
                console.log("You need a male and female pair to reproduce.");
            }
    
        } else {
            console.log("Incompatible Species!");
        }
    }
    
    sleeps() {
        console.log(`${this.commonName} is sleeping.`);
    }
}

class Reptile extends Animal {
    constructor (data, limbs, pregnant, eggCount) {
        super(data);

        if (this.sex == "xy") {
            this.pregnant = false;
            this.eggCount = 0
        } else {
            this.pregnant = pregnant;
            this.eggCount = eggCount
        } 
        
        this.bloodType = "cold";
        this.limbs = limbs;
        this.pregnant = pregnant;
        this.eggCount = eggCount;
    }

    sleeps() {
        console.log(`${this.commonName} is sleeping!`);
    }
}

class Avian extends Animal {
    constructor() {
        super();
        this.bloodType = "warm";
        this.limbs;
        this.pregnant;
        this.eggCount;
    }
    sleeps() {
        console.log(`${this.commonName} is sleeping!`);
    }
}

let zooArray = [];

let giraffe1 = new Mammal({
    sName: "Giraffa camelopardalis",
    cName: "Giraffe",
    birthday: new Date("10/22/2021"),
    dangerous: false,
    endangered: false,
    diet: "milk",
    weightLbs: 150,
    sex: "xy"
}, 4, false, true);

zooArray.push(giraffe1);
giraffe1.feed();


let lion1 = new Mammal({
    sName: "Panthera leo",
    cName: "Lioness",
    birthLocation: "Africa",
    birthday: new Date("06/22/2010"),
    endangered: true,
    dangerous: true,
    diet: "meat",
    weightLbs: 420,
    sex: "xy",
}, 4, false, true);

let lion2 = new Mammal({
    sName: "Panthera leo",
    cName: "Lion",
    birthLocation: "Africa",
    birthday: new Date("06/22/2008"),
    endangered: true,
    dangerous: true,
    diet: "meat",
    weightLbs: 480,
    sex: "xx",
}, 4, false, true);

lion1.feed();
zooArray.push(lion1);

lion2.feed();
zooArray.push(lion2);

let turtle1 = new Reptile({
    sName: "Geochelone nigra",
    cName: "Galapagos Turtle",
    birthday: new Date("10/14/1993"),
    endangered: false,
    dangerous: false,
    diet: "shrubs",
    weightLbs: 500,
    sex: "xx"
}, 4, true, 10);

turtle1.feed();
zooArray.push(turtle1);

lion1.describe();
turtle1.describe();
giraffe1.describe();


giraffe1.mate(lion1);

lion1.mate(lion2);

console.log(lion2.getPregnant());
console.log(lion1.getPregnant());