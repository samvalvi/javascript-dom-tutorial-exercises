// Your code here
let addElement = document.getElementById("addToDo");
let unsortedList = document.querySelector("ul");

addElement.addEventListener("keydown", addTask);

function addTask(event) {
	if (event.key === "Enter") {
		let elementList = document.createElement("li");
		let span = document.createElement("span");

		span.innerHTML = `<i class="fa fa-trash"></i> ${event.target.value}`;
		elementList.appendChild(span);
		unsortedList.appendChild(elementList);
		console.log("Enter was press");
	}
}

unsortedList.addEventListener('mousedown');

function deleteTask(event) {
    
}
