
/*
  Pass by value example with primitives with functions
*/

function selfSum(p)
{
  p = p + p;
  return p;
}

let c = 2;
console.log(selfSum(c)); // 4
console.log(c); // 2