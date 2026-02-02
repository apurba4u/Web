const subject = 'chemistry'
const book = `Chemistry`
const university = "Leading University"

console.log(university);
console.log(university.toLowerCase()); // "shobgula word suto hater convert hoiya jaibo"

if (book === subject.toUpperCase()) { // shobgula word boro hate convert hoiya jaibo
  console.log("same");
} else console.log("not same");

const drink = " water    "
const liquid = `    water    `

if (drink.trim() === liquid.trim()) console.log("Equal"); // word er suru te and seshe white space takle remove koira dibo
else console.log("not equal");