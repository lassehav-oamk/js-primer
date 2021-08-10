let person1 = {
  name: "John",
  gender: "M",
  profession: "Cook"
};

let person2 = {
  name: "Mary",
  gender: "F",
  profession: "Pilot"
};

person3 = {
  name: "Peter",
  gender: "M",
  profession: "programmer",
  mother: {
    name: "Susan",
    gender: "F",
    profession: "Taxi driver"
  },
  father: person1
};

/* Print the property names and their values */
function printObject(object) {
  for (const key in object) {
    console.log(key + ':' + object[key]);
  }
}

function printParents(person) {
  console.log('Parents of ' + person.name);
  console.log('Mother: ' + person.mother.name);
  console.log('Father: ' + person.father.name);
}

printParents(person3);

