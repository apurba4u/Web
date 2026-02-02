// 12 inch 1 feet

function inchToFeet(inch) {
  const feet = parseInt(inch /12)
  const inch1 = inch
  inch = inch % 12
  if (inch1) return feet + " feet " + inch + " inch" 
  else feet + " feet"
}

function mileToKm(mile) {
  return mile * 1.61
}

function kmtoMile(km) {
  return km * 0.621
}
const safwanHeight = inchToFeet(72)
console.log(safwanHeight);
