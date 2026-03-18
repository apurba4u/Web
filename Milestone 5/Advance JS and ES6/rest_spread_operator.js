/**
 * Rest Operator
 * ekta function er expected parameter 4 ta thakbe apni janen
 * aro parameter o thakte pare koita thakbe apni jananen nah
 * sejonno rest operator bebohar kora hoi
 * restoperator er value gula array akare return dibe
 */

function myfunc(a, b, c, d, ...otherParameter) {
  console.log(a, b, c, d, otherParameter);
}

myfunc(1,2,3,4,5,6,7,8,9,11,10)

/**
 * Spread Operator
 * eita mane oitase value gula soriye citiye deowa
 */


// Spread Array
let arr = [1,2,3,4]
console.log(arr); // eita array er bracket soho output asbe
console.log(...arr); // eita bracket chara output asbe
let arr2 = [...arr] // copy independently


console.log(Math.max(1,2,3,43,5));
console.log(Math.min(1,2,3,43,5));

console.log(Math.max(...arr2)); // karon math.max spread value expect kore
console.log(Math.min(...arr2));

// Spread object
const person = {
  name: 'Apurba',
  age: 20
}

// ei khetre heap memory te shudhu reference rekhe diyece 
// copy dependently
const person3 = person // ei khetre 2tar value change oibo

// copy independently
const person2 = {...person} // ei khetre jeta update kora hobe seta change hobe

person2.name = 'Ovi'
console.log(person.name);
console.log(person2.name);