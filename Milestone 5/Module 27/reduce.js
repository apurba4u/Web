const numbers = [1, 2, 3, 4, 5, 6]

// get total sum
// method 1
let sum = 0
numbers.forEach(elem => sum += elem)
console.log(sum);

// method 2
const total = numbers.reduce((acc, num) => acc + num, 0)
console.log(total);
