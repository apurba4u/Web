// filter helps to find multiple elements for certain requirement

// find even odd from numbers
const numbers = [1, 2, 3, 4, 5]
const evenNumbers = numbers.filter(elem => elem % 2 == 0)
const oddNumbers = numbers.filter(elem => elem % 2 == 1)
console.log(numbers);
console.log(evenNumbers);
console.log(oddNumbers);

// find freinds name which first letter is n
const friends = ['zaved', 'naved', 'khaled', 'sajed', 'nahid', 'nasib']
const nFriends = friends.filter(frd => frd[0] === 'n')
console.log(nFriends);

const students = [
  {name: 'Tormuj', age: 22},
  {name: 'Zaved', age: 31},
  {name: 'Naved', age: 23},
  {name: 'Khaled', age: 20},
  {name: 'Sajed', age: 34},
  {name: 'Nahid', age: 22},
  {name: 'Nasib', age: 41},
]

const youngStudents = students.filter(elem => elem.age <= 25)
const olderStudents = students.filter(elem => elem.age > 25)

console.log(youngStudents);
console.log(olderStudents);