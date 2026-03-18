/**
 * nested function e inner function ke call kora hosse closure
 * vibinno customer er jonno valovabei eita kaj korbe
 */
function counter (owner) {
  let cnt = 0
  function increment() {
    cnt++
    console.log(`${owner} counter is ${cnt}`);
  }
  return increment
}

let cnt1 = counter('Rahim')
let cnt2 = counter('Ovi')
cnt1()
cnt1()
cnt2()
cnt1()
cnt1()
cnt2()
cnt1()
cnt2()

function lifeCount(name) {
  let cnt = 3
  return () => {
    if (cnt > 0) {
      cnt--
      console.log(`Hey ${name} you lost a life! your remaning life is ${cnt}`);
    } else {
      console.log(`Alas, ${name} ! you've no life remaning ${cnt}`);
    }
  }
}

// const apurbaOvi = lifeCount('Ovi')
// const opu = lifeCount('Opu')

// apurbaOvi()
// opu()
// apurbaOvi()
// apurbaOvi()
// opu()