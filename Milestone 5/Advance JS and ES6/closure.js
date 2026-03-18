// Closure is when a function is able to remember and access it's lexical scope even when that function is executing outside it's lexical scope

function deductLifeCounter (studentName) {
  let life = 3
  let lifeDeductExecute = () => {
    if (life > 0) {
      life--
      console.log(`${studentName}, You lost a life, Life remaning: ${life}`);
    } else {
      console.log(`${studentName}, Your life is over! No life left!`);
    }
  }
  return lifeDeductExecute
}

const apurbaOvi = deductLifeCounter('Apurba Ovi')
const opu = deductLifeCounter('Opu Barman')
apurbaOvi() // 2
apurbaOvi() // 1
opu() // 2
apurbaOvi() // 0
apurbaOvi() // No life left!
opu() // 1