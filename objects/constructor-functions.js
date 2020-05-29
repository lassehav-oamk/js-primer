function Animal(type, speed, isCute)
{
  this.type = type;
  this.speed = speed;
  this.isCute = isCute;
}

let alligator = new Animal('alligator', 'slow', false);
let dog = new Animal('dog', 'fast', true);


for(prop in alligator)
{
  console.log(prop);
  console.log(alligator[prop]);
}