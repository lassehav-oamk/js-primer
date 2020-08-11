function sum(a, b) {
  return a + b;
}

console.log(sum(5, 1)); //Should print out 6

const myName = function(name) {
  console.log(name);
}

myName("John Doe");


// function can be assigned and passed into functions as parameter
const anotherName = myName;
anotherName("Donald Duck");


const printParameterType = function(p) {
  console.log(typeof p);
}

printParameterType(2);
printParameterType("Hello world");
printParameterType(myName);



// Example of the importance of () as calling the function;
const example = function() {
  return "Have a nice day";
}

const anotherExample = example;
console.log(typeof anotherExample); // should be function

const yetAnotherExample = example();
console.log(typeof yetAnotherExample); // should be string




