localStorage.clear();
localStorage.setItem('Name', 'Ovi')
localStorage.setItem('Age', 23)
localStorage.setItem('Blood', 'B+')
localStorage.setItem('players', ['Ovi','Opu','Piyash','Messi'])
localStorage.setItem('person', {
  name : 'Sumon',
  nobab: 'Siraj',
  age: 23
})
//  remove 
localStorage.removeItem('Name')

console.log(localStorage.getItem('Name'));
console.log(localStorage.getItem('Age'));
console.log(localStorage.getItem('Blood'));
console.log(localStorage.getItem('players'));
console.log(localStorage.getItem('person'));

const addNumbersTols = () => {
  const number = Math.ceil(Math.random()*100)
  console.log(number);
  localStorage.setItem('number',number)
}
const getNumbersFromLs = () => {
  const number = localStorage.getItem('number')
  console.log('From saved local storage', number);
  document.querySelector('h2').textContent = number
}

// Array ke string e convert
const arr = [1,2,3,4,5,6]
const arr1 = JSON.stringify(arr)
console.log(arr1, typeof arr1);

// String teikka array te convert
const arr2 = JSON.parse(arr1)
console.log(arr2, typeof arr2);

// object re string e convert
const customer = {
  name : 'Ovi',
  age : 22,
  Blood: 'B+'
}
const customerString = JSON.stringify(customer)
console.log(customerString);
console.log(typeof customerString);

// String teikka object e convert
customerObject = JSON.parse(customerString)
console.log(customerObject);
console.log(typeof customerObject);

const setObjToLS = () => {
  localStorage.setItem('customer', JSON.stringify(customer))
}

// String teikka property paowa jai nah sejonno parse e nite hobe
const readObjectFromLS = () => {
  console.log(JSON.parse(customerString).name);
}