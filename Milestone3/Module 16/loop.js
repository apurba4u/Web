const mobile = {
  brand: 'Apple',
  price: '1Lakh 70k',
  color: 'Black',
  camera: '12mp'
}

for (const i in mobile) {
  console.log(i + " " + mobile[i]);
  // key + " " + value
}

const keys = Object.keys(mobile)
const values = Object.values(mobile)

for (const i of keys) console.log(i);
for (const i of values) console.log(i);

let str = "Mississippi";
console.log(str.indexOf("i", 3));
console.log(mobile.name);