// 1. Parent Node
const mainContainer = document.getElementById('main-container')

// 2. create child node
const placeSection = document.createElement('section')
//  create the place section child

// create h1
const h1 = document.createElement('h1')
h1.textContent = 'places I want to visit'
placeSection.appendChild(h1)

// create ul
const ul = document.createElement('ul')
placeSection.appendChild(ul)

// create li
const li1 = document.createElement('li')
li1.textContent = 'TurungChora'
ul.appendChild(li1)

const li2 = document.createElement('li')
li2.textContent = 'SadaPattor'
ul.appendChild(li2)

const li3 = document.createElement('li')
li3.textContent = 'Border Side'
ul.appendChild(li3)


// 3. append placeSection to the main Contaoiner

mainContainer.appendChild(placeSection)


// easier way to appendChild
const bookSection = document.createElement('section')
bookSection.innerHTML = 
`<h1>Books I need to read</h1>
  <ul>
    <li>Physics</li>
    <li>Chemistry</li>
  </ul>`

mainContainer.appendChild(bookSection)
// 4. check
console.log(mainContainer.innerHTML);
