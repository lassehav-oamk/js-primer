let test = [
  {
    a: 1,
    b: 2
  },
  {
    a: 51,
    b: 6
  },
  {
    a: 86,
    b: 2342
  },
  {
    a: 2341,
    b: 2195
  },
];

let result = test.map(function(element) {
  console.log("test");
  return element.a + element.b;
});
console.log(result);

let result2 = test.map((element) => {
  return element.a + element.b;
});
console.log(result2);

let result3 = test.map(element => element.a + element.b);
console.log(result3);

let result4 = test.map(e => e.a + e.b);
console.log(result4);