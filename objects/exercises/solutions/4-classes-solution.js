/*
  Exercise: Create a class for Food which allows the user to set the type of food and quantity. The class should have a method, which can be used to eat the food and quantity will decrese accordingly and a method to be able to describe what type of food it is.
  With the following code
  let banana = new Food('Banana', 4);
  banana.whatIsThis();
  banana.eatOne();
  banana.eatOne();
  banana.eatOne();
  banana.eatOne();
  banana.eatOne();

  You should get this output
  Banana
  Slurp! One banana eaten. 3 remaining
  Slurp! One banana eaten. 2 remaining
  Slurp! One banana eaten. 1 remaining
  Slurp! One banana eaten. 0 remaining
  Sorry, no more bananas remaining!
*/

class Food {
  constructor(type, qty) {
    this.type = type;
    this.qty = qty;
  }

  whatIsThis() {
    console.log(this.type);
  }

  eatOne() {
    if(this.qty > 0)
    {
      this.qty--;
      console.log('Slurp! One ' + this.type.toLowerCase() + ' eaten. ' + this.qty + ' remaining');
    }
    else{
      console.log('Sorry, no more ' + this.type.toLowerCase() + 's remaining!');
    }
  }
}

let banana = new Food('Banana', 4);
banana.whatIsThis();
banana.eatOne();
banana.eatOne();
banana.eatOne();
banana.eatOne();
banana.eatOne();

