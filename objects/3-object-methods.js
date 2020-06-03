let example = {
  foo: "bar",
  sum: function(a, b) {
    return a + b;
  }
}

console.log(example.foo);
console.log(example.sum(4, 5));

console.log('\nObject method example with constructors')
/* Object method example with constructors */
function Animal(type, speed, isCute)
{
  this.type = type;
  this.speed = speed;
  this.isCute = isCute;
  this.makeNoise = function() {
    console.log('ROAR')
  }
}

let cat = new Animal('Cat', 'slow', true);
cat.makeNoise();

/* Object method example with this keyword */
console.log('\nObject method example with this keyword');
function AnotherAnimal(type)
{
  this.type = type;
  this.printWhoAmI = function() {
    console.log(this.type);
  }
}

let dog = new AnotherAnimal('Dog');
let bird = new AnotherAnimal('Bird');

dog.printWhoAmI();
bird.printWhoAmI();
