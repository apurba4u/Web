// calculate odd number avg
function oddAvg(arr) {
  let sum = 0
  let cnt = 0
  for (const i of arr) {
    if (i & 1) {
      sum += i
      cnt++
    }
  }
  return sum/cnt
}
console.log(oddAvg([1,2,3,4,5]));

// Remove the Duplicate number from of an array

function noDuplicate(arr) {
  const arr1 = []
  for (const i of arr) {
    if(!arr1.includes(i)) arr1.push(i)
  }
  return arr1
}
console.log(noDuplicate([1,2,3,4,5,5,2,3,1]));
console.log(noDuplicate(['abul','babul','kabul','abul','babul','kabul']));