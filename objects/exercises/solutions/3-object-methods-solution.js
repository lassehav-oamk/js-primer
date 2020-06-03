/*

Exercise: Create a new Car object, which has the following properties
•	Brand – string, name of the car manufacturer. For example ‘BMW’.
•	Registration – string, unique registration code of the car. For example ‘ABC-123’
•	Speed – integer, current speed of the car. Initial value 0.

The object should have also two methods
•	increaseSpeed – method increases the speed of the car by 5
•	displaySpeed – prints the car registration number and its current speed

*/

function Car(brand, registration)
{
  this.brand = brand;
  this.registration = registration;
  this.speed = 0;
  this.increaseSpeed = function() {
    this.speed += 5;
  }
  this.displaySpeed = function() {
    console.log(this.registration + ", speed: " + this.speed);
  }
}

let bmw = new Car('BMW', 'ABC-123');
let volvo = new Car('Volvo', 'XYZ-987');

bmw.displaySpeed();
bmw.increaseSpeed();
bmw.displaySpeed();
volvo.displaySpeed();