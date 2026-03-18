let ul = document.querySelector("ul");ul.addEventListener("click", function (dets) {
	// dets.target.style.textDecoration = "line-through";
	// dets.target.classList += "lt";
	dets.target.classList.toggle("lt");
});