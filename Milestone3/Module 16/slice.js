const Name = "Apurba Ovi"
const fName = Name.slice(0,6) // 0 teikka suru 6 er age sesh
console.log(fName);

const fullName = `Apurba Talapatra Ovi`
console.log(fullName.split()); // eita dile full sentence tare ekta array er vitre haraiya dise
console.log(fullName.split(``)); // eita dile prottek word er modde gap dise
console.log(fullName.split(` `)); // eita dile prottek sentence  er modde gap dise
console.log(fullName.split(`a`)); // jekhane a ase a word tare gayeb koira baki tare ekta array te dukaise

const friendgrp = 'Opu,Piyash,Suleman,Tahmid'
const friend = friendgrp.split(',') // jekhane jekhane khoma paise , oikhan teikka khoma remove koira ekta array er vitre dukaiya dise
console.log(friend);

console.log(friend.join('|')); // prottek ta word er modde "\" diya join koraiya dise

const first = 'Apurba'
const last = 'Ovi'

// const FULLname = first + " " + last
const FULLname = first.concat(` ${last}`)
console.log(FULLname);

console.log(FULLname.includes("Ovi")); // ei word ta thakle true return korbo
