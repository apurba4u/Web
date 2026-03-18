let select = document.querySelector('select')
let h3 = document.querySelector('h3')

select.addEventListener('change', (elem) => {
  h3.textContent = `${elem.target.value} Device Selected`
  h3.style.textTransform = 'capitalize'
})