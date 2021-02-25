// Your code here
let addElement = document.getElementById("addToDo");
let unsortedList = document.querySelector("ul");

addElement.addEventListener("keydown", addTask);

function addTask(event) {
	if (event.key === "Enter") {
		// crear elemento
		let elementList = document.createElement("li");
		let span = document.createElement("span");

		// generando boton de basura
		let deleteButton = document.createElement("i");
		deleteButton.className = "fa fa-trash";
		deleteButton.innerHTML = ` ${event.target.value}`;

		// agregando funcionalidad de boton onClick
		deleteButton.addEventListener("click", () => {
			// borrar elemento padre
			unsortedList.removeChild(deleteButton.parentNode.parentNode);
			// let elem = deleteButton.parentNode.parentNode;
			// elem.parentNode.removeChild(elem);
		});

		// anidar elementos
		span.appendChild(deleteButton);
		elementList.appendChild(span);
		unsortedList.appendChild(elementList);
	}
}
