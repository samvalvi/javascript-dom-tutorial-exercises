// Your code here
let addElement = document.getElementById("addToDo");
let unsortedList = document.getElementsByTagName("UL");

addElement.addEventListener('change', addTask);

const addTask = (event) => {
	let element = document.createElement("li");
	element.innerHTML = event.target.value;

	list.appendChild(element);
};


unsortedList.addEventListener('click', deleteTask);

const deleteTask = (event) => {
    
}
