function getMax(arr) {
  let maxValue = arr[0]
  for (let i = 1; i <= arr.length; i++) {
    if (maxValue <= arr[i]) maxValue = arr[i]
  }
  return maxValue
}
function getMax1(arr) {
  let maxValue = arr[0]
  for (const i of arr) {
    if (maxValue <= i) maxValue = i
  }
  return maxValue
}
function getMin(arr) {
  let maxValue = arr[0]
  for (let i = 1; i <= arr.length; i++) {
    if (maxValue >= arr[i]) maxValue = arr[i]
  }
  return maxValue
}
function getMin1(arr) {
  let maxValue = arr[0]
  for (const i of arr) {
    if (maxValue >= i) maxValue = i
  }
  return maxValue
}

const arr = [1,2,3,4,-1,2]
console.log(getMax(arr));
console.log(getMax1(arr));
console.log(getMin(arr));
console.log(getMin1(arr));
