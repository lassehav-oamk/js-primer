const Food = require('./4-classes-ex1-solution.js');

class Refrigerator {
  constructor() {
    this.store = [];
  }

  putFood(food) {
    this.store.push(food);
  }

  getAndEatFood(foodName) {
    let searchedFood = this.store.find(function (food) {
      if(food.type === foodName) {
        return true;
      }
      else {
        return false;
      }
    });

    if(searchedFood == undefined) {
      console.log('Sorry, no such food in this refrigerator!');
      return;
    }

    searchedFood.eatOne();
  }
}

let r = new Refrigerator();
let apple = new Food('Apple', 2);
r.putFood(apple);
r.getAndEatFood('Apple');
