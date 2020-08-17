
const traditional = function(parameter1, parameter2) {
  const result = parameter1 * parameter2;
  return result;
}

/* Basic arrow syntax, function keyword is not needed and => is after parameter declaration */
const arrow1 = (parameter1, parameter2) => {
  const result = parameter1 * parameter2;
  return result;
}

/* In this example there is no {} to define function body or return statement. */
const arrow2 = (parameter1, parameter1) => parameter1 * parameter2;

/* With single parameter the () brackets surrounding parameters are not needed */
const arrow3SingleParam = parameter1 => parameter1 * 70;

