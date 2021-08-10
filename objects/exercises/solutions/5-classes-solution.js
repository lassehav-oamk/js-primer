/*
  Exercise 2: Create a class for Refrigerator which is capable of storing food. The class should have couple of different methods.
  •	putFood – stores food in refrigerator
  •	getAndEatFood – gets and consumes the specified food and amount from refrigerator, indicates if there is no such food available, indicates if last food of the type was eaten
  •	getContents – display list of what food and how many is inside the refrigerator

  Fill your refrigerator with different Foods and then eat them. Validate the everything works as intended.
  The following code
  let r = new Refrigerator();
  let apple = new Food('Apple', 2);
  let bananas = new Food('Banana', 3);
  r.putFood(apple);
  r.putFood(bananas);
  r.getContents();
  r.getAndEatFood('Apple');
  r.getAndEatFood('Apple');
  r.getAndEatFood('Banana');
  r.getAndEatFood('Apple');
  r.getContents();

  Should give about the following output:
  -----------
  | Apple 2
  | Banana 3
  -----------
  Slurp! One apple eaten. 1 remaining
  Slurp! One apple eaten. 0 remaining
  Slurp! One banana eaten. 2 remaining
  Sorry, no such food in this refrigerator!
  -----------
  | Banana 2
  -----------
*/


class Food {
  constructor(type, qty) {
    this.type = type;
    this.qty = qty;
  }

  whatIsThis() {
    return this.type;
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

  getQty() {
    return this.qty;
  }
}

class Refrigerator {
  constructor() {
    this.store = [];
  }

  putFood(food) {
    this.store.push(food);
  }

  getAndEatFood(foodName) {
    let searchedFoodIdx = this.store.findIndex(function (food) {
      if(food.type === foodName) {
        return true;
      }
      else {
        return false;
      }
    });

    if(searchedFoodIdx == -1) {
      console.log('Sorry, no such food in this refrigerator!');
      return;
    }

    this.store[searchedFoodIdx].eatOne();
    if(this.store[searchedFoodIdx].getQty() == 0)
    {
      this.store.splice(searchedFoodIdx, 1);
    }
  }

  getContents() {
    console.log('-----------');
    this.store.forEach(element => {
      console.log('| ' + element.whatIsThis() + ' ' + element.getQty());
    });
    console.log('-----------')
  }
}

let r = new Refrigerator();
let apple = new Food('Apple', 2);
let bananas = new Food('Banana', 3);
r.putFood(apple);
r.putFood(bananas);
r.getContents();
r.getAndEatFood('Apple');
r.getAndEatFood('Apple');
r.getAndEatFood('Banana');
r.getAndEatFood('Apple');
r.getContents();

