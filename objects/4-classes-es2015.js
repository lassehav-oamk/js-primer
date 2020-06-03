class Car {
  constructor(brand, registration)
  {
    this.brand = brand;
    this.registration = registration;
    this.speed = 0;
  }

  increaseSpeed()
  {
    this.speed += 5;
  }

  displaySpeed()
  {
    console.log(this.registration + ", speed " + this.speed);
  }
}


let audi = new Car("audi", "abc-123");
audi.displaySpeed();
audi.increaseSpeed();
audi.displaySpeed();