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

module.exports = Food;