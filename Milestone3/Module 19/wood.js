/**
 * chair ---> 3 feet
 * table ---> 10feet
 * bed -----> 50feet
 */

function woodQuantity(chairQuantity,tableQuantity,bedQuantity) {
  const perChairWood = 3
  const perTableWood = 10
  const perBedWood = 50

  return (chairQuantity * perChairWood) + (tableQuantity * perTableWood) + (bedQuantity * perBedWood)
}

console.log('Total wood required: '+ woodQuantity(10, 7, 8));
