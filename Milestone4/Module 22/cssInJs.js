// console.log('File Connected');
// const sections = document.getElementsByTagName('section')
// for (const i of sections) {
//   console.log(i);
// }

// const sections = document.querySelectorAll('section')
// for (const i of sections) {

//   console.log(i);
//   i.style.backgroundColor = 'lightBlue'
//   i.style.border = '2px solid green'
//   i.style.borderRadius = '15px'
//   i.style.marginBottom = '5px'
//   i.style.padding = '10px'
  
//   // dynamic class
//   i.classList.add('section-card') // age uporer gula apply ; uporere gula nah takle eita apply hobe
// }

// Learn 6
// childnode
console.log(document.getElementById('players-container'));
console.log(document.getElementById('players-container').childNodes);
console.log(document.getElementById('players-container').childNodes[0]);
console.log(document.getElementById('players-container').childNodes[1]);
console.log(document.getElementById('players-container').childNodes[2]);
console.log(document.getElementById('players-container').childNodes[3]);
console.log(document.getElementById('players-container').childNodes[3].childNodes[1]); // nested childNode


// parentNode
console.log(document.getElementById('players-container').childNodes[3].parentNode);
console.log(document.getElementById('players-container').childNodes[3].childNodes[1].parentNode); // nested parentNode