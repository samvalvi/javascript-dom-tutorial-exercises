window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	let select = document.querySelector("#mySelect");

	// your code here
	countries.forEach(country => {
		let element = document.createElement("option");
		element.value = country;
		element.innerHTML = country;
		//This add the element to #mySelect
		select.appendChild(element);
	});

	select.addEventListener("change", () => this.alert(this.event.target.value));
};
