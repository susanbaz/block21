// Define the Car class with a constructor that takes make, model, and year properties
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Add a getDescription method to the Car prototype
  getDescription() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

// Define the ElectricCar class as a subclass of Car
class ElectricCar extends Car {
  constructor(make, model, year, range) {
    super(make, model, year); // Call the parent class's constructor using super
    this.range = range; // Add the range property to ElectricCar
  }

  // Override the getDescription method to include the range of the car
  getDescription() {
    return `${this.year} ${this.make} ${this.model} can go up to ${this.range} miles on a full charge`;
  }
}

// Create an instance of ElectricCar with the given properties
const myTesla = new ElectricCar("Tesla", "Model S", 2019, 300);

// Call the getDescription method on the instance and print the output
console.log(myTesla.getDescription()); // Output: 2019 Tesla Model S can go up to 300 miles on a full charge
