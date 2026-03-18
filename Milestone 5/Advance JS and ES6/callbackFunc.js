/**
 * callback function
 * eita mane oitase kunu function er argument hisebe arekta function pass kore dite paren
 */

const greet = (name, message, cb) => {
  console.log(`Hi I'm ${name}`);
  cb(message)
}
const sayGreetings = (message) => {
  console.log(message);
}
greet('Ovi', 'Good Night', sayGreetings)
