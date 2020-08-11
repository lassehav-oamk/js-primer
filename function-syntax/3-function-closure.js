
function greetingsToYou(name) { // This is an outer function
  const createdAt = new Date();
  function seasonSelector(type) { // This is an inner function
    switch(type) {
      case "Christmas":
        console.log("Merry christmas " + name);
        break;
      case "New Year":
        console.log("Happy new year " + name);
        break;
      case "Day":
        console.log("Have a nice day " + name);
        break;
      default:
        console.log("Use either 'Christmas', 'New Year' or 'Day' as values");
    }
    console.log("This greeter was created on " + createdAt.toISOString());
  }
  return seasonSelector;  // Here the outer function returns the inner function
}


greeter = greetingsToYou("Lasse");
greeter();
greeter("Christmas"); // outputs 'Merry christmas Lasse' and datestamp
greeter("New Year");
greeter("Day");