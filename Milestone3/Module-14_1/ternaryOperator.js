/**
 * Ternary --> three parts
 * 
 * condition ? do something when true : do something when false
 */
const age = 10

let x = age > 18 ? "You can give vote" : "you've no right to give vote"

console.log(x);

let price = 500
let isLeader = false

price = (isLeader) ? 0 : price += 100

console.log(price);