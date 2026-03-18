/**
 * Scope : Simana bah Gondi
 * 3 Types of Scope
 * 1. Global Scope
 * 2. Block Scope
 * 3. Function Scope or Local Scope
 */

/**
 * Global Scope
 * Var let const jetai use kori nah keno jekunu jaiga teke access korte parvo
 * it means code er jekunu jaiga teke access kora
 */

let test = 'Test'
console.log(test);

/**
 * Block Scope
 * {} --> eita diye declare kora manei block scope
 * Var is not maintain block scope
 * Let and Const isnot maintain block scope
 */

{
  var test1 = 'Test1'
  let test2 = 'Test2'
}
console.log(test1); 
console.log(test2); // it throw Error

/**
 * Function or Local Scope
 * var, let, const maintain function scope
 */

function myFunc() {
  var test3 = 'Test3'
  let test4 = 'Test4'
  const test5 = 'Test5'
}
console.log(`${test3} ${test4} ${test5}`); // it throw error