/**
 * JS kintu buje kun function tah age call hobe kun function ta pore call hobe sejonno "HEllo" true age print hoyes
 */
function fncCall() {
  const url = 'https://jsonplaceholder.typicode.com/posts/1'

  fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data))
  console.log("HELLO");
console.log(true);
}
// fncCall()

// eita r khetre syncronise onuzayi output eseche
const fncCall2 = async() => {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const json = await data.json()
  console.log('HELLO');
  console.log(json);
  console.log(true);
}
fncCall2()