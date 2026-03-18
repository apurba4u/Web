let h1 = document.createElement('h1')
document.body.prepend(h1)

h1.textContent = 'Apurba Ovi'
h1.style.textTransform = 'capitalize'

h1.addEventListener('click', () => {
  h1.style.backgroundColor = 'black'
  h1.style.color = '#fff'
})

let p = document.createElement('p')
p.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam harum voluptatum quas reprehenderit nesciunt possimus atque minima fugiat iure blanditiis eligendi vel tempora natus itaque excepturi, rem officia vitae deserunt nobis dolores! Dolor, ea!'
document.body.append(p)

const red = () => {
  p.style.color = 'red'
}

p.addEventListener('click',red)
p.removeEventListener('dblclick',red)