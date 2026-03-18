let abcd = document.querySelector("#abcd");

function red () {
	abcd.style.backgroundColor = "red";
}
function yellow () {
	abcd.style.backgroundColor = "yellow";
}

abcd.addEventListener("mouseover", yellow);
abcd.addEventListener("mouseout", red);

// Mouse Move
window.addEventListener('mousemove', (elem) => {
  console.log(elem);
})