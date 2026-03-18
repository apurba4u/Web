/**
 * Pass by value (primitive) -> value pataile original value change hobe nah
 * Pass by reference (non primitive) -> without spread -> man pataile both change oibo
 * Pass by reference (non primitive) -> with spread -> man pataile sudhu modified ta change oibo
 */

let x = 10, y = 20
console.log("Before: ",x, y);
let multiply = (a, b) => {
  a += 5
  b += 10
  console.log("After: ",a, b);
  return a * b
}

const result = multiply(x, y)
console.log(result);

// pass by reference

function firstSum(arr1, arr2) {
  arr1[0] = 100
  arr2[0] = 200

  const first = arr1[0]
  const second = arr2[0]
  return first + second
}

const num1 = [1, 2, 3]
const num2 = [4, 5, 6]

console.log('Before Calling: ', num1, num2);
console.log(firstSum(num1, num2));
console.log('After Calling: ', num1, num2);