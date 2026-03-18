let h1 = document.querySelector('h1')
window.addEventListener('keydown', (elem) => {
  if (elem.key === ' ') {
    h1.textContent= 'spc'
  } else {
    h1.textContent = elem.key
  }
})

let btn = document.querySelector('#btn')
let fileinp = document.querySelector('#fileinp')

btn.addEventListener('click', () => {
  fileinp.click()
})

fileinp.addEventListener('change', (elem) => {
  const files = elem.target.files[0]
  if(files)  btn.textContent = files.name
})