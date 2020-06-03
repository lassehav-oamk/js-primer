/*
  There are couple of ways how to iterate or loop over all properties in objects.
  The for..in loop (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) works as seen below:

    for(prop in car)
    {
      console.log(prop);
    }

  Exercise: Create your own vehicle object, which has the following properties
  •	type – truck
  •	tireCount – 6
  •	capacity – 5 tons
  Then use the for .. in loop to print out all the property names and their values of your object.
*/

let vehicle = {
  type: "truck",
  tireCount: 6,
  capacityTons: 5
}

for(prop in vehicle)
{
  console.log(prop + ' value is ' + vehicle[prop]);
}