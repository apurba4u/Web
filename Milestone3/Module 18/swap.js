function swap(a, b) {
  let temp
  temp = a
  a = b
  b = temp
}
let a = 10, b = 15
swap(a, b)
console.log(a + " " + b);
for (var i = 0; i < 5; i++) {
 	 setTimeout(function () {
 	console.log(i);
  }, 100);
}
console.log(Math.sqrt);