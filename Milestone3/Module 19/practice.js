// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];



const heights1 = [167, 190, 120, 165, 137];

function getMin(arr) {
  let min = arr[0]
  for (const i of arr) {
    if (min >= i) min = i
  }
  return min
}
console.log(getMin(heights1));

// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];


const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function getSmallestName(arr) {
  let min = arr[0]
  for (const i of arr) {
    if (i.length <= min.length) {
      min = i
    }
  }
  return min
}
console.log(getSmallestName(heights2));

// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000
//     tablet = 15000
//     mobile = 20000

function getTotalPrice(a,b,c) {return a + b + c}

  let laptop = 35000
  let tablet = 15000
  let mobile = 20000
  
  console.log(getTotalPrice(laptop,tablet,mobile) + ' tk');


// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function getAvgPrice(product) {
  let sum = 0
  for (const i of product) sum += i.price
  return sum / product.length
}

console.log(getAvgPrice(phones));

// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

function getMonthlySalary(servicer) {
  let sum = 0
  for (const i of servicer) {
    if (i.experience === 0) sum += i.starting
    else {
      sum += (i.starting + i.increment) * i.experience
    }
  }
  return sum
}

 const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
console.log(getMonthlySalary(employees));