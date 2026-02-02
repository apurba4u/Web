const country = "Bangladesh";
const division = 'Chittagaong'
const district = `BrahmanBaria`;
const thana = new String("Sarail") // eita r type oitase object

console.log(typeof country, typeof district, typeof thana);

console.log(country.length);
console.log(country[0], country[country.length - 1]);

const numbers = [1,2,3,4,5,6]
console.log(numbers);
numbers[0] = 100 // eikhetre value update oibo
// Array is mutable => mane array er modde kunu change kora jabe 
console.log(numbers);
country[0] = 'F' // String er khetre value update oibo nah
// string is immutable => mane string er modde kunu change kora jabe nah
console.log(country);