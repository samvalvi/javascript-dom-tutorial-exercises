let element = document.querySelector("#parentLI");
//Return an array.
let child = element.childNodes[3];
child.parentNode.removeChild(child);
