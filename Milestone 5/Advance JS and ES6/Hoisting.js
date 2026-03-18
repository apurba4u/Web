var a = 10
function one() {
  var a = 30
  console.log(a);
  two()
  console.log("I'm a function one");
}
function two () {
  three(3)
  console.log('I am a function two');
}
function three(a) {
  console.log(`I am function ${a}`);
}

var b = 20

one()

var c = 30

// var is hoisted , but only the declaration, not the value assignment

console.log(test); // undefined --> creation phase e undefined set kora hoyese
var test = 123 
console.log(test);

// Let and const also hoited, but not initialization. They are in 'Temporal Dead zone' from the start of the block until declaration line.

// Temporal Dead Zone means --> a container or a place jekhane giye eigula thake 

console.log(Name); // it throw ERROR
let Name = 'Apurba'
console.log(Name);

console.log(Age); // it throw ERROR
const Age = 22
console.log(Age);