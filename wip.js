function Car(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }
  Car.prototype.fill = function (someGallons) {
    if (this.tank.length === 0) {
      this.tank.push(someGallons);
    }
  };
  Car.prototype.toString = function () {
    return `I ran out of fuel at ${this.odometer}`;
  };
























class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    }
    poop() {
        this.stomach = [];
    }
    eat(edible) {
        if (this.stomach.length < 10) {
            return this.stomach.push(edible);
        } else {
            return this.poop;
        }
    }
    toString() {
        return `${this.name}, ${this.age}`
    }
  }
  