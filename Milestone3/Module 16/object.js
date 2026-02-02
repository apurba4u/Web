const bottle = {
  brand: "apple",
  price: `20tk`,
  color: "white",
  isClean: false,
  "fav place": ['Dhaka', 'Sylhet', 'Ctg'] //dot notation diya access kora jaibo nah, bracket notation diya access korte oibo
};
console.log(bottle); // normal object akare view

// Dot notation
// Dot diya object er value access
const Name = bottle.brand
console.log(Name);


// bracket notation
//[] third bracket diya value access
const tonuFokinni = bottle['isClean']
console.log(tonuFokinni);
const tonuFavPlace = bottle["fav place"]
console.log(tonuFavPlace);

bottle.price = '25tk' // object er modde value update kora
console.log(bottle.price);

const dam = 'price'
console.log(bottle[dam]); // halka modify koira value access 










const subject = {
  name: "biology",
  teacher: "rasheda mam",
  examDate: "30feb",
  chapters: ["first", "second", "third"],
  exams: {
    name: "final exam",
    marks: 100,
  },
};

// for (const i of bottle) {
//   console.log( bottle[i]);
// }

// const object_example = {
//   key1: 'Value1',
//   key2: 'Value2',
//   key3: 'Value3',
//   key4: 'Value4',
//   fnc: function() {
//     console.log("Function of Object");
//   }
// };
