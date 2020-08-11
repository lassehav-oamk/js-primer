// Closure exercise
// Your task is to write the closure implementation, which allows the following code to execute and output correct

/*** START YOUR CODE HERE */

/*** END YOUR CODE HERE */

const multiplier2 = multiplier(2);
const multiplier6 = multiplier(6);
const multiplier15 = multiplier(15);

const a = multiplier2(2);
const b = multiplier2(7);
const c = multiplier2(32);

console.assert(a == 4, "multiplier2(2) is incorrect")
console.assert(b == 14, "multiplier2(7) is incorrect")
console.assert(c == 64, "multiplier2(32) is incorrect")

const d = multiplier6(2);
const e = multiplier6(7);
const f = multiplier6(32);

console.assert(d == 12, "multiplier6(2) is incorrect")
console.assert(e == 42, "multiplier6(7) is incorrect")
console.assert(f == 192, "multiplier6(32) is incorrect")

const x = multiplier15(2);
const y = multiplier15(7);
const z = multiplier15(32);

console.assert(x == 30, "multiplier15(2) is incorrect")
console.assert(y == 105, "multiplier15(7) is incorrect")
console.assert(z == 480, "multiplier15(32) is incorrect")