// map, filter, dind, foreach, reuce

let arr = [10, 20, 30, 40, 50]
// map - update/modify element of an array

let updateArr = arr.map((elem, index, array) => {
  console.log(`${elem} -> ${index} : ${array}`);
  return elem * 2
})

console.log(updateArr);

// Filter Method
// Filter Multiple Elements
// multiple elements khuje ana

let overEighteen = arr.filter((elem) => elem > 20)
console.log(...overEighteen);

// find method
// single element found
// single elements khuje ana
// multiple data thakle jeta age ase oi data ta age dibe
const findThirty = arr.find((elem) => elem === 30)
console.log(findThirty);

const phones = [
  {name: 'Iphone 14 pro',
    price: 900000
  },
  {name: 'Iphone 15 pro',
    price: 920000
  },
  {name: 'Iphone 16 pro',
    price: 940000
  },
  {name: 'Iphone 17 pro',
    price: 960000
  },
  {name: 'Iphone 12 pro',
    price: 880000
  },
  {name: 'Iphone 11 pro',
    price: 860000
  },
  {
    name: 'Motorola G85',
    price: 24000
  },
  {
    name: 'Samsung s25 Ultra',
    price: 112500
  },
  
  {
    name: 'Samsung s26 Ultra',
    price: 114500
  },

]

// 900000 tk r uporer element gula find kora
let richPhone = phones.filter((elem) => elem.price >= 900000 && elem.name.includes('Iphone'))
let samsung = phones.filter((elem) => elem.name.includes('Samsung'))
let motorola = phones.find((elem) => elem.name.includes('Motorola'))
console.log(...richPhone);
console.log(...samsung);
console.log(motorola);

// just loop iterator
phones.forEach((elem) => {
  console.log(elem);
})

// reduce method

// total phone price
// method 1
let sum = 0
phones.forEach((elem) => (sum += elem.price))
console.log(sum);

// reduce method
const summation = phones.reduce((accumulator, elem) => {
  return accumulator + elem.price
},0)
console.log(summation);