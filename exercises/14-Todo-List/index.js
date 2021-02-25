// Your code here
let addElement = document.getElementById("addToDo");
let unsortedList = document.querySelector("ul");

addElement.addEventListener("keydown", addTask);

const addTask = event => {
	let elementList = document.createElement("li");
	let span = document.createElement("span");

	span.innerHTML = `<i class="fa fa-trash"></i>${event.target.value}`;
	elementList.appendChild(span);
	unsortedList.appendChild(elementList);
};
