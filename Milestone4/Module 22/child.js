// Create Element
const playerList = document.getElementById('player-list')
const newChild = document.createElement('li')
newChild.textContent = 'New Born Baby footballer'
playerList.appendChild(newChild)
console.log(newChild.parentNode);