const mobiles = [
  {name : 'SamSung', price: 20000, camera: '12mp', color: 'black'},
  {name : 'Xioami', price: 18000, camera: '12mp', color: 'black'},
  {name : 'Oppo', price: 30000, camera: '12mp', color: 'black'},
  {name : 'iphone', price: 10000, camera: '12mp', color: 'black'},
  {name : 'Walton', price: 9000, camera: '12mp', color: 'black'},
  {name : 'Asus', price: 13000, camera: '12mp', color: 'black'},
]

function cheapPriceMobile(mobile) {
  let min = mobile[0]
  for (const i of mobile) {
    if (i.price <= min.price) {
      min = i
    }
  }
  return min
}
console.log(cheapPriceMobile(mobiles).name);