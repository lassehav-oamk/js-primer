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


class RaceCar extends Car {
  constructor(type, brand, registration)
  {
    super(brand, registration);
    this.type = type;
  }

  makeNoise()
  {
    console.log('Brrum brrum');
  }

  increaseSpeed()
  {
    this.speed += 10;
  }
}

let formula = new RaceCar("F1", "Ferrari", "F-1");
formula.makeNoise();
formula.displaySpeed();
formula.increaseSpeed();
formula.displaySpeed();