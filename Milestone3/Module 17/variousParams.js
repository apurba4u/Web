/** 
 * for a given String tell me whether it has even number of characters or not
 */

function evenSizedString(Name) {
  return (Name.length & 1) ? false : true
}
const res = evenSizedString('Ovi')
console.log(res);