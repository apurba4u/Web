/**
 * Traditional function hoisted
 * Arrow function hoisted nah
 * 
 * Traditional function e this er value global object
 * Arrow function e this er value khali
 */


console.log(myName("Ovi")); // --> Hoisted
function myName(name) {
  return `My Name is : ${name}`
}

// Arrow function

// multiplr parameter
const sum = (a, b) => a + b; // shortcut version
console.log(sum(10, 20));

// single parameter
const sqrt = a => a*a
console.log(sqrt(10));

// function myFunc() {
//   console.log(this);
// }
// myfunc()

let myfunc = () => this
console.log(myfunc()); // {}
