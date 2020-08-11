let a = 5;

function example(param1) {
  const b = 10;
  console.log(a + b + param1);
}

example(20); // should output 35
try {
  console.log(b); // b is not defined in global scope
}
catch(e) {
  console.log(e);
}



