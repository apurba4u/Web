const handleAddProducts = () => {
  let product = document.querySelector('#product').value
  let quantity = parseInt(document.querySelector('#quantity').value)

  console.log('Product Add: ', product, quantity);
  displayProduct(product, quantity)
  addProductToCart(product, quantity)
  product = ''
  quantity = ''
}

const getCart = () => {
  let cart = {}

  const cartJSON = localStorage.getItem('cart')
  if (cartJSON) {
    cart = JSON.parse(cartJSON)
  }
  return cart
}

const addProductToCart = (pd, qty) => {
  const cart = getCart()

  if (cart[pd]) {
    cart[pd] = cart[pd] + qty
  } else {
    cart[pd] = qty
  }
  console.log('cart', cart);

  // local storage e save
  // sejonno string akare save kortasi
  const cartJSON = JSON.stringify(cart)
  localStorage.setItem('cart', cartJSON)
}
const displayProduct = (pd, qty) => {
  // get the element
  const ul = document.querySelector('#products-container')

  // Create li
  const li = document.createElement('li')
  li.textContent = `${pd} : ${qty}`

  // append
  ul.prepend(li)
}

// reload er poreo dekhabe
const displayStoredProduct = () => {
  const cart = getCart()
  for (pd in cart) {
    const qty = cart[pd]
    console.log(pd, qty);
    displayProduct(pd, qty)
  }
}
displayStoredProduct()
/**
 * To save Object/Array in the Local Storage
 * 1. convert the object to JSON string by using JSON.stringify
 * 2. localstorage.setItem()
 */

/**
 * to get object/array from the local storage
 * 1. get the item from the local storage it will be in JSON string
 * 2. convert the JSON string to js object by using js.parse
 */