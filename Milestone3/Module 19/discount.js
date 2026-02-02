/**
 * Normal Discount
 * upto 100: --> 100
 * more than 100: --> 90
 * more than 200: --> 70
 */


function getDiscountPrice(qty) {
  return qty <= 100 ? qty * 100 : (qty <= 200 ? qty * 90 : qty * 70)
}

console.log(getDiscountPrice(300));
console.log(getDiscountPrice(200));
console.log(getDiscountPrice(100));


/**
 * Multilayre Discount
 * first100 --> 100
 * 101 to 200 ---> 90
 * above200 ---> 70
 */

function getMultiLayerDiscount(qty) {
  return qty <= 100 ? qty * 100 : (qty <= 200 ? (qty * 100) + ((qty - 100) * 90) :  (100 * 100 + 90 * 100) + (qty - 200) * 70)
}

console.log(getMultiLayerDiscount(100));
console.log(getMultiLayerDiscount(200));
console.log(getMultiLayerDiscount(300));