let car = new Object();
car.manufacturer = "Mercedes Benz";
car.model = "E";
car.type = "Sedan";

let anotherCar = {
  manufacturer: "Audi",
  model: "A4",
  type: "Estate"
};

console.log(car.type); // Sedan
console.log(anotherCar['manufacturer']); // Audi


// Iterate over properties
for(prop in car)
{
  console.log(prop);
}