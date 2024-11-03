//----------Classes----------

//Parent
class Vehicle {
    constructor({ wheels, doors, color }) {
      this.wheels = wheels; // Number of wheels
      this.doors = doors;   // Number of doors
      this.color = color;    // Color of the vehicle
    }
  
    // return a description of the vehicle
    getDescription() {
      return `This vehicle is ${this.color}, has ${this.wheels} wheels, and ${this.doors} doors.`;
    }
  }

//Child 1
class Car extends Vehicle {
    constructor(vehicleData, topSpeed) {
        super(vehicleData); // Call the parent constructor
        this.topSpeed = topSpeed; // Unique property for Car
      }
    
      // Method to return the top speed of the car
      getTopSpeed() {
        return `The top speed of this car is ${this.topSpeed} km/h.`;
      }
    }

    var myCar = new Car(js_car);
console.log(myCar.getDescription()); // Output: This vehicle is white, has 4 wheels, and 4 doors.
console.log(myCar.getTopSpeed());     // Output: The top speed of this car is 200 km/h.

//Child 2
class Truck extends Vehicle {
    constructor(vehicleData, maxLoadWeight) {
        super(vehicleData); // Call the parent constructor
        this.maxLoadWeight = maxLoadWeight; // Unique property for Truck
      }
    
      // Method to return the maximum load weight of the truck
      getMaxLoadWeight() {
        return `The maximum load weight of this truck is ${this.maxLoadWeight} kg.`;
      }
    }
    console.log(myTruck.getDescription());      // Output: This vehicle is yellow, has 18 wheels, and 2 doors.
    console.log(myTruck.getMaxLoadWeight());    // Output: The maximum load weight of this truck is 10000 kg.

//Vehicle Factory will create Vehicles of different types
class VehicleFactory {}

//----------Car Implementation----------

//Create JSON string object from schema
var json_car = `{
    "wheels": 4,
    "doors": 4,
    "color": "white"
  }`;
  
  var json_truck = `{
    "wheels": 18,
    "doors": 2,
    "color": "yellow"
  }`;

  var myCar = new Vehicle(js_car);
console.log(myCar.getDescription()); // "This vehicle is white, has 4 wheels, and 4 doors."

var myTruck = new Vehicle(js_truck);
console.log(myTruck.getDescription()); // "This vehicle is yellow, has 18 wheels, and 2 doors."

//Convert JSON object to JS Object
var js_car = JSON.parse(json_car);
var js_truck = JSON.parse(json_truck);

//Add topSpeed to the JS Obj
js_car.topSpeed = 200; // Example top speed in km/h

//Create CarFactory and a Car

//----------Truck Implementation----------

//Create JSON string object from schema

//Convert JSON object to JS Object

//Add maxLoadWeight to the JS Obj
js_truck.maxLoadWeight = 10000; // Example max load weight in kg

//Create TruckFactory and a Truck