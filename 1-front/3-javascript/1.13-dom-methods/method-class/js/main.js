let section = document.createElement("section");
let paragraph = document.createElement("p");
let paragraphText = document.createTextNode("Lorem ipsum inside a section");

paragraph.appendChild(paragraphText);
section.appendChild(paragraph);

console.log(section);

let koders = ["Moi", "Oli", "Vic"];

/* Método para crear un elemento de dom */
let koderListItem = document.createElement("li");
/* Método para crear un nodo de texto */
let koderItemText = document.createTextNode("Nodo de texto");

koderListItem.appendChild(koderItemText);