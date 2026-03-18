const person = {
  name: 'Ovi',
  fruit: 'dalim',
  dish: 'halim',
  friends: ['alim', 'kolim', 'lamim'],
  isRich: false,
  money: 34000
}
/**
 * JSON -> JS object with Notation
 * JSON.stringify -> Object to JSON
 * JSON.parse -> JSON to Object
 */
console.log(person);
console.log(typeof person);

// Normal object to JSON Convert
const personJSON = JSON.stringify(person)
console.log(personJSON);
console.log(typeof personJSON);

// JSON to Object convert
const parseJSON = JSON.parse(personJSON)
console.log(parseJSON);
console.log(typeof parseJSON);