const products = [
  {name: 'shampoo', price: 300, quantity: 3},
  {name: 'chiruni', price: 100, quantity: 5},
  {name: 'shirt', price: 700, quantity: 1},
  {name: 'pant', price: 1300, quantity: 2},
]

function getShoppingSummary(product) {
  let target = [
    {totalcost: 0, minimumPriceProduct: '', maximumPriceProduct: ''},
  ];
  let sum = 0
  for (const i of product) {
    sum += (i.price * i.quantity)
    if (i.price <= product[0].price) target.minimumPriceProduct = i.name
    if (i.price >= product[0].price) target.maximumPriceProduct = i.name
  }
  target.totalcost = sum
  return target
}
console.log(getShoppingSummary(products));