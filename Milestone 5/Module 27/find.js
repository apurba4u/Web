// find helps to find specific condition with first element
// it return single element and first one
const students = [
  {name: 'Tormuj', age: 22},
  {name: 'Zaved', age: 31},
  {name: 'Naved', age: 23},
  {name: 'Khaled', age: 20},
  {name: 'Sajed', age: 34},
  {name: 'Nahid', age: 22},
  {name: 'Nasib', age: 41},
]

const oldStudents = students.find(elem => elem.age >= 30)
console.log(oldStudents);

// total age
const sumAge = students.reduce((accumulator, elem) => accumulator + elem.age, 0)
console.log(sumAge);