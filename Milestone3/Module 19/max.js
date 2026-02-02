function getMax(a,b) {
  return (a >= b) ? a : b
}
function getmax(a, b, c) {
  if (a >= b && a >= c) return a
  else if (b >= a && b >= c) return b
  else return c
}
const max1 = getMax(96,89)
const max2 = getMax(56,98)
const max3 = getMax(96,101)
console.log(getMax(max1,max3));
console.log(getmax(max1,max2,max3));
console.log(Math.max(max1,max2,max3));