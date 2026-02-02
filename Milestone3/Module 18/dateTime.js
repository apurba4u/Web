const today = new Date()
const date = new Date('2062-10-18')
console.log(date.getMonth());
console.log(date.getDay());

const specificDate = new Date(2091, 0, 26) // ami likhar somoi month day index 0 hisebe calculate korte hobe
console.log(specificDate); // but output hisebe 1 teke calculate hobe string formate e ashar jonno
specificDate.setMonth(10)
console.log(specificDate.toLocaleString('en-GB')); // rela date time formate e dibo