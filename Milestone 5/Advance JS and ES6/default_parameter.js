/**
 * jekunu function e parameter default parameter value set kore dite hoi
 * jeno eita error show nah kore
 * function expected onuzayi parameter nah pele, undefined hisebe value dhore operation kore than output NaN ashe
 * Apni parameter pass korle apnar parameter niye nibe, nahole default parameter niye nibe
 */

function multiply(a = 1, b = 2) {
  return a * b
}

console.log(multiply(5,5));
console.log(multiply(10));