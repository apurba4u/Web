// Sum of arr
function sumArr(arr) {
  let sum = 0
  for (const i of arr) sum += i
  return sum
}

const arr = [1,2,3,4,5,6]
const sum = sumArr(arr)
console.log("Sum of Array: ", sum);

// return all even numbers from an array

function evenArr(arr) {
  let evenArr = []
  let oddArr = []
  for (const i of arr) {
    if (!(i & 1)) evenArr.push(i)
    else oddArr.push(i)
  }
  return {evenArr, oddArr}
}
const arr1 = evenArr(arr).evenArr
const arr2 = evenArr(arr).oddArr

console.log(arr1);
console.log(arr2);