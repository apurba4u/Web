// Pass by value(pass by primitive value)

const name = 'Ovi'
const myfunc = (value) => {
  value = `Mr. ${value}`
  console.log(`Inside Func ${value}`);
}
console.log(name);
myfunc(name)

// pass by refernce (non primitive datatype)
const obj = {
  color: 'red',
  model: '1j'
}
const myFunc2 = (value) => {
  value.color = 'black'
  console.log(`Inside func -> ${value.color}`);
}

// eikhane 2tar ei color black hoye gese
myFunc2(obj)
console.log(obj);