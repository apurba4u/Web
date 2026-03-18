// // map
// // Array element gulare jodi update/modify korte hoi

// const numbers = [1, 2, 3, 4, 5]
// let doubled = []
// // method 1
// for (const i of numbers) {
//   doubled.push(i * 2)
// }
// console.log(doubled);

// // method 2
// const doubleIt = num => num * 2
// doubled = []
// doubled = numbers.map(doubleIt)
// console.log(doubled);
// doubled = []

// // method 3
// doubled = numbers.map(num => num * 2)
// const squared = numbers.map(num => num * num)
// console.log(doubled);
// console.log(squared);

// // array
// // first letter of every array element
// const friends = ['opu', 'niloy', 'safwan', 'sohag', 'piyash']
// const firsletter = friends.map(frd => frd[0])
// console.log(firsletter);

// // object
// // name of every object
// const products = [
//   {name: 'laptop', price: 45000},
//   {name: 'phone', price: 15000},
//   {name: 'tablet', price: 25000}
// ]
// const prices = products.map(pd => pd.price)
// const names = products.map((pd, index, productsArray) => {
//   const name = pd.name.toUpperCase()
//   console.log(`${index} : ${name} ${productsArray}`);
//   return name
// })
// console.log(...prices);
// console.log(...names);
const products = [
  {name: 'laptop', price: 45000},
  {name: 'phone', price: 15000},
  {name: 'tablet', price: 25000}
]

// loop through
// method 1
for (const i of products) {
  console.log(i);
}

// method 2
// foreach kunu kisu return kore nah
products.forEach((elem) => {
  console.log(elem);
})
