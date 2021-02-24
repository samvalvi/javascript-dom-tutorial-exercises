window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	countries.forEach(country => {
        let select = document.querySelector("#mySelect");
        let element = document.createElement("option");
		element.value = country;
		element.innerHTML = country;

        select.appendChild(element);
        
        select.addEventListener()
	});
};
