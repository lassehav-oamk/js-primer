/*
  Create a function, which will accept one parameter, a reference to an object, calculate the sum of the parameters
  object properties foo and bar, add a new property result to the object received as parameter.
  Call the function and see how the object given as parameter can be modified inside a function.
*/

let a = {
  foo: 1,
  bar: 2
}

function exercise(p)
{
  // your code here
  p.result = p.foo + p.bar;
}

exercise(a);
console.log(a.result); // output should be the sum of foo and bar properties of the a object