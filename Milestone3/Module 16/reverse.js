
const sentence = "I'm Learning Web Development"
let Reverse = ''
for (const i of sentence) {
  Reverse = i + Reverse // reverse word
  console.log(i);
}
console.log(Reverse);

for (let i = sentence.length; i > 0; i--) {
  console.log(sentence[i]); // reverse
}

const reversed = sentence.split('').reverse().join('+') // reverse koira than join
console.log(reversed);