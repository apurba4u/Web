// let person = {
//   name: 'Apurba',
//   age: 23,
//   getInfo: () => {
//     console.log(`My name is : ${person.name}`);
//   }
// }

// // access property

// // Dot notation
// console.log(person.name);
// console.log(person.age);
// person.getInfo()

// // bracket notation
// let name = 'name'
// console.log(person[name]); // dynamic

// // object keys
// let keys = Object.keys(person)
// console.log(keys);
// console.log(keys.length); // object e koita property ase

// // Object values
// let values = Object.values(person)
// console.log(values);

// // Object entries
// // ekta array er vitor key value glue gula dibe
// let entries = Object.entries(person)
// console.log(entries);

// // for in and array method after object keys
// for (let key in person) {
//   console.log(key + " " + person[key]);
// }

// freeze, seal, delete

let car = {
  brand: 'Toyota',
  color: 'Black',
  model: 'XYZ'
}

// delete car.color // property delete koira dibo
console.log(car);

Object.freeze(car) // prevent insert, delete and update
car.color = 'White'
car.brand = "BMW"
car.engine = 'Test'
console.log(car);

Object.seal(car) // prevent insert and delete but allow update
car.engine = 'OnTest' 
delete car.color
car.color = 'Red' // It's Allow
console.log(car);

let car2 = {...car} // copy independently