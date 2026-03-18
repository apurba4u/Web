/**
 * undefined vs null
 * undefined mane oitase define kora hoi nai, define kora hote parto
 * kunusomoi jodi ami nije set kori er value nai, mane null set kori
 * 
 * undefined --> value not assigned
 * null --> intentionally empty
 */

// undefined 
console.log(data);
var data

const sum = (a, b) => a + b
console.log(sum());

const student = {
  name: 'Tormuj',
  age: 23
}

delete student.age
console.log(student.age);
console.log(student.marks);

let arr = [1, 2, 3, 4, 5]
delete arr[1]
console.log(arr);
