function add(a, b) {return a + b}
function subtraction(a, b) {return a - b}
function multiply(a, b) {return a * b}
function divide(a, b) {return a / b}

function calculator (a,b, inp) {
  return inp === '+' ? add(a,b) : (inp === '-' ?subtraction(a,b) : (inp === '*' ? multiply(a,b) : divide(a,b)))
}
console.log(calculator(10,20,'/'));