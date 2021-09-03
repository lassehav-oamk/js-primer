function sum(a, b)
{
  return a+b;
}

export function minus(a, b)
{
  return a-b;
}

function multiply(a, b)
{
  return a*b;
}

const settings = {
  foo: "bar",
  xyz: 12345
};


export {
  sum,
  multiply,
  settings
};