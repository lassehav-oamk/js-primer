/*
  Bonus Exercise 3.1
  Create an Animal constructor function as seen in the example
  objects/2-constructor-functions.js, add a property called strength.
  Next create a function Battle to battle another Animal given as
  parameter to the function. Each Animal object should have the Battle
  function in it, so it should be a method of the Animal.

  The Battle function should use the strength properties to decide
  which animal wins the battle. Bigger is better.
  Add a small random factor to the battle so that it is not just a
  comparison, which animal has greater strength.
*/
function Animal(type, speed, isCute, strength)
{
  this.type = type;
  this.speed = speed;
  this.isCute = isCute;
  this.strength = strength;
  this.Battle = function(animalWhichWeAreDoingBattleWith) {
    const randomFactor1 = Math.random() * 20;
    const randomFactor2 = Math.random() * 20;
    if((this.strength + randomFactor1) > (animalWhichWeAreDoingBattleWith.strength + randomFactor2)) {
      console.log(this.type + ' is winner!')
    } else {
      console.log(animalWhichWeAreDoingBattleWith.type + ' is winner');
    }
  };
}

let ant = new Animal('ant', 10, false, 5);
let fly = new Animal('fly', 30, false, 3);
let elephant = new Animal('elephant', 5, true, 20);

for(let i = 0; i < 10; i++) {
  elephant.Battle(ant);
}
