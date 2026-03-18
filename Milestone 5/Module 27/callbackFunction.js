/**
 * kunu function er parameter hisebe jodi arekta function use kora hoi seta hosse callback function
 */

function settleLife(name, isBCS, marriage, patri) {
  if (isBCS) {
    marriage(patri)
  } else {

  }
}
function sayYes(patri) {
  console.log('Yes ', patri);
}

settleLife('ovi',true, sayYes, 'nari')