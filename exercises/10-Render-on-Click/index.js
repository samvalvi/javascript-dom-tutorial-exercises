let button = document.querySelector("#superDuperButton");

button.addEventListener("click", function() {
	//your code here
	//This create the div and asign the background color.
	let object = document.createElement("div");
	object.innerHTML = "Hello World";
	object.style.backgroundColor = "yellow";

	let container = document.querySelector("body");
	container.appendChild(object);
});
