/**
 * 1. for loop
 * 2. while loop
 * 3. do...while loop
 * 4. for...in loop --> object loop korar jonno
 * 5. for...of loop --> array loop korar jonno
 */

// const friends = ['Opu', 'Niloy', 'Sumon', 'Muhib']

// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }


// for (const i of friends) {
//     console.log(i);
// }

 // Reverse Method
// for (let i = friends.length - 1; i >= 0; i--) {
//   console.log(friends[i]);
// }

//   // friends.reverse();
//   // console.log(friends.reverse());

//   const reversed = friends.reverse() // eita original array o reverse koira dibo
//   console.log(reversed);
//   console.log(friends);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// const reverse_numbers = []
// for (let i = 0; i < numbers.length; i++) {
//   reverse_numbers.unshift(numbers[i])
// }
// console.log(reverse_numbers);



/**
 * 1. Sort Method
 * a) Ascending --> smaller to larger
 * b0 larger to smaller
 */

// Ascending
const numbers_asc = numbers.sort(function (a, b) {return a - b})
console.log(numbers);
console.log(numbers_asc);

const numbers = [4, 7, 12, 43, 2, 6]
const numbers_desc = numbers.sort(function (a, b) {return b - a}) // origianl array te impact falaibo
console.log(numbers);
console.log(numbers_asc);