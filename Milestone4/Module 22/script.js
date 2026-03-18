// Learn 1
// console.log("Hello From Outside");
// const student = {
//   name: 'Apurba Ovi',
//   age: 22,
//   id: 185,
//   study: (subject) => {
//     console.log('Subject : ', subject);
//   }
// }
//  // ALL LI Tag
// const li = document.getElementsByTagName('li')
// console.log(li);
// // li er textcontent access
// for (const i of li) {
//   console.log(i.textContent);
// }

// // ALL h1 Tags
// const h1 = document.getElementsByTagName('h1')
// // ALL h1 textContent access
// for (const i of h1) {
//   console.log(i.textContent);
// }


// Learn 2
// specific element access
// const foodTitleH1 = document.getElementById('food-title')
// console.log(foodTitleH1);
// console.log(foodTitleH1.innerText);

// // specific element textcontent change
// foodTitleH1.textContent = 'Ami jesob Khabar Khete posondo Kori'
// console.log(foodTitleH1.textContent);

// const bandElement = document.getElementById('band')
// console.log(bandElement);
// bandElement.textContent = 'jalali sleeping Band'

// // common element access
// const foreignElements = document.getElementsByClassName('foreign')

// console.log(foreignElements);
// for (const i of foreignElements) {
//   console.log(i.textContent);
// }

// Learn 3

// console.log(document.querySelectorAll('.food .foreign'));
// console.log(document.querySelectorAll('#old-dhaka p')); // old dhaka er vitor shobgula paragraph
// console.log(document.querySelectorAll('#old-dhaka p span')); // old dhaka er vitor shobgula paragraph er vitor span
// console.log(document.querySelectorAll('#old-dhaka span')); // old dhaka er vitor shobgula span
// console.log(document.querySelector('#old-dhaka span')); // old dhaka er vitor first jeta pabe oita return korbe

// Learn 4

// const foodElement = document.getElementById('food-title')
// console.log(foodElement);
// console.log(foodElement.textContent);
// foodElement.textContent = 'Food ForEver' // textContent Change
// console.log(foodElement.innerText);

// // dom diye css Modify
// foodElement.style.color = 'white'
// foodElement.style.borderRadius = '15px'
// foodElement.style.padding = '50px'
// foodElement.style.marginLeft = '20px'

// // clasList add
// foodElement.classList.add('bold')
// foodElement.classList.add('bg-red')
// foodElement.classList.add('text-center')
// foodElement.classList.add('big')

// // elment er vitor attribute access
// console.log(foodElement.getAttribute('id'));
// console.log(foodElement.getAttribute('class'));

// // attribute set korte
// foodElement.setAttribute('title', 'Title or tooltip by JS') // first e attribute name then attribute value

// Learn 5
console.log(document.getElementById('players-container'));
console.log(document.getElementById('players-container').innerText);
console.log(document.getElementById('players-container').innerHTML);