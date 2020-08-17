const readline = require('readline');

class Car {
  constructor(brand, registration)
  {
    this.brand = brand;
    this.registration = registration;
    this.speed = 0;
  }

  increaseSpeed()
  {
    this.speed += 5;
  }

  displaySpeed()
  {
    console.log(this.registration + ", speed " + this.speed);
  }

  keyboardInputDemo() {
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
    process.stdin.on('keypress', function(key, data) {

      console.log("Name of the brand: " + this.brand);

      if (data.ctrl && data.name === 'c') {
        process.exit();
      } else {
        console.log('key', key);
      }
    });
    console.log('Press a key to test the application');
  }
}

let audi = new Car("audi", "abc-123");
audi.displaySpeed();
audi.increaseSpeed();
audi.displaySpeed();
audi.keyboardInputDemo();
