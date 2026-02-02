function tentimes(number) {
  return number * 10;
}
function cutHalf(number) {
  return number / 2;
}

function doMath(a, b) {
  return ((a + b) * (a -b)) / 2;
}

function check(a) {
  if (a & 1) return false
  else return true
}
const half = cutHalf(100)
const tenGun = tentimes(100)
const result = doMath(10,5)
const chk = check(11) ? "even" : "odd"

console.log('Half: ', half);
console.log('TenX: ', tenGun);
console.log('Result: ', result);
console.log(chk);

