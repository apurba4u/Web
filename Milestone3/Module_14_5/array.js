/**
 * enables storing a collection of multiple items under a single variable name.
 */

// const numbers = [4,5,6,7]
// numbers.push(8) // shobar seshe e add kore 
// numbers.push(9) 
// numbers.pop() // last er element delete kore

// numbers.unshift(2) // shobar age element add kore
// numbers.unshift(1)
// numbers.shift() // shobar samner element delte kore

// // numbers.shift()

// // numbers.push(10, 11)
// console.log(numbers);

// const friends = ["Sumon", "Muhib", "Iram", "Safwan", "Ratul", "Tonu", "Niloy", "Masud"]

// // friends.includes("Tonu") => element ase kina check kore
// console.log(friends.includes("Tonu"));  // True
// console.log(friends.includes("Musa")); // False

// // friends.indexOf("Iram") => Iram er Index number paite chai => jodi eita (-1) return kore tahole ei element array te nai
// console.log(friends.indexOf("Iram"));

const friends = ["Sumon", "Muhib", "Iram", "Safwan", "Ratul", "Tonu", "Niloy", "Masud"]

const num = []
const food = 'ros o gol l a'
const age = 10

// Array.isArray(friends) => Array kina check kore
console.log(Array.isArray(friends)); // true
console.log(Array.isArray(num)); // true
console.log(Array.isArray(food)); // true
console.log(Array.isArray([])); // true
console.log(Array.isArray(age)); // false

const arr1 = ['a','b','c']

let text = arr1.join('+') 
console.log(text); // a+b+c

text = arr1.join(' and ')
console.log(text); // a and b and c

text = arr1.join() 
console.log(text); //a,b,c

const num1 = [1,2,3,4]
const num2 = [5,6,7,8]

let arr = [1,2,3,4,5,6,7,8]
// arr.slice(m, n) => m teke suru (n - 1) e sesh
console.log(arr.slice(2,4)); // 2 teke suru 4er age sesh
console.log(arr);