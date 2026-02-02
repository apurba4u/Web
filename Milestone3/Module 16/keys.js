const mac = {
  brand: 'Apple',
  price: '1Lakh 30k',
  processor: 'M4',
  hdd: '256GB'
}

const keys = Object.keys(mac) // eitar maddome jotogula key ase totogula key ana jai
console.log(keys);

const values = Object.values(mac) // eitar maddome jotogula value ase totogula value ana jai
console.log(values);

// nseted objects
const college = {
  name: 'vnc',
  class: ['11', '12'],
  events: ['science fair', 'bijoy mela', '21 Feb'],
  unique: {
    color: 'blue',
    result: {
      gpa: 5,
      merit: 'top'
    }
  }
}

for (let i of college.class) {
  console.log(i); // object er array access
}

console.log(college.unique.color); // nested object er value access
console.log(college.unique.result.gpa);
console.log(college.unique.result.merit);

// object er array modify
college.events[1] = '16 December'
console.log(college.events[1]);
// delete college.class --> eita maddome key delte oiya jaibo