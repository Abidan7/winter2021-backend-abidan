class Employee {
    constructor () {
        this.name = null;
        this.age = null;
    }

    work() {
        console.log(this.name + "is working!");
    }
}

// Inheritance
class Shape {
    constructor(width, height) {
        this.widthInches = width;
        this.heightInches = height;
        this.name= "shape";
    }

    getArea() {
        let area = this.widthInches * this.heightInches;
        return area;
    }

    getPerimeter() {
        let perimeter = (this.widthInches * 2) + (this.heightInches * 2);
        return perimeter;
    }

    compareAreaTo(shape) {
        if (this.getArea() > shape.getArea()){
            console.log(`This ${this.name} is bigger than a ${shape.name}.`)
        } else {
            console.log(`One ${this.name} is smaller than a ${shape.name}.`)
        }
    }
}

class Rectangle extends Shape {

    constructor(side) {
        // This calls the constructor method of the "parent" (previous) inherited class.This is REQUIRED and must be the FIRST STATEMENT in the constructor.
        super(side, side);
    }
    writeInfo() {
        console.log(`The area of a rectangle is ${this.getArea()} inches.`);
        console.log(`The perimeter of a rectangle is ${this.getPerimeter()} inches.`);
    }
}


class Square extends Shape {

    constructor(side) {
        super(side, side);
        this.name = "square";
    }
    writeInfo() {
        console.log(`The area of a square is ${this.getArea()} inches.`);
        console.log(`The perimeter of a square is ${this.getPerimeter()} inches.`);
    }
}


class Triangle extends Shape {
    constructor(width, height) {
        super(width, height);
        this.name = "triangle";
    }
    getArea() {
        let area = (this.widthInches * this.heightInches) / 2;
        return area;
    }
    getPerimeter() {
        let perimeter = this.widthInches + this.heightInches + (Math.sqrt(this.widthInches * this.heightInches));
        return perimeter;
    }
    
    writeInfo() {
        console.log(`The area of a triangle is ${this.getArea()} inches.`);
        console.log(`The perimeter of a triangle is ${this.getPerimeter()} inches.`);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(radius * 2, radius * 2);
        this.name ="circle";
        this.radiusInches = radius;
        this.diameterInches = radius * 2;
    }
    getArea() {
        let area = this.radiusInches * this.radiusInches * Math.PI;
        return area;
    }
    getPerimeter(){
        let perimeter = this.diameterInches * Math.PI;
        return perimeter;
    }
    getCircumference() {
        return this.getPerimeter();
    }
    
    writeInfo() {
        console.log(`The area of a circle is ${this.getArea()} inches.`);
        console.log(`The circumference of a circle is ${this.getCircumference()} inches.`);
    }
}


let myRectangle = new Rectangle (5,16);
myRectangle.writeInfo();

let mySquare = new Square(10);
mySquare.writeInfo();

let myTriangle = new Triangle(5, 9);
myTriangle.writeInfo();

let myCircle = new Circle(12);
myCircle.writeInfo();

myTriangle.compareAreaTo(mySquare);
mySquare.compareAreaTo(myCircle);