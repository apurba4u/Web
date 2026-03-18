// Array destructure 
// je value ta skip korbo shudhu seta skip korbo
// target koira value output
let arr = [10,20,30,40,50,60,70]
let [ten,twenty,thirty,,,sixty] = arr

console.log(ten, twenty, thirty, sixty);

// Object destructure
let person = {
  name: 'Apurba',
  roll: 185,
  address: {
    city: 'Sylhet',
    country: 'BD',
    street: {
      roadNumber: 23,
      wordNumber: 4
    }
  },
  isMarried: false,
  isMillionear: false,
  luicca: null,
  hobby: ['Reading', 'Travelling', 'Watching Movie']
}

let {roll:id,name:Naam, address: {
  city:sohor,
  country:Desh,
  street:{
    roadNumber:rasta,
    wordNumber:wordno
  }
}} = person

// key gula change korlam destructure korar somoi
console.log(`${Naam} ${id} ${sohor} ${Desh}, ${rasta} ${wordno}`);
