/*
  You can define new objects, by using constructor functions.
  After defining the object, you can create an instance of it by using the keyword new.

  function Animal(type, speed, isCute)
  {
    this.type = type;
    this.speed = speed;
    this.isCute = isCute;
  }

  let alligator = new Animal('alligator', 'slow', false);

  Exercise:
  Create a car object definition and then create two instances of it – one for Audi and one for Mercedes.
  In addition use the for..in loop to list print all the properties to the console.
*/

function Car(brand)
{
  this.brand = brand;
}

let audi = new Car("Audi");
let mercedes = new Car("Mercedes");

for (const key in audi) {
  console.log(audi[key]);
}

for (const key in mercedes) {
  console.log(mercedes[key]);
}