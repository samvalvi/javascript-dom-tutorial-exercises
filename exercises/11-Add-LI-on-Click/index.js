let button = document.querySelector("#superDuperButton");

button.addEventListener("click", function() {
	//your code here
	let elementLi = document.createElement("li");
	elementLi.innerHTML = "Forth element";

	let container = document.querySelector("#myList");
	container.appendChild(elementLi);
});
