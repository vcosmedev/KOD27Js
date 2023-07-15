let section = document.createElement("section");
let paragraph = document.createElement("p");
let paragraphText = document.createTextNode("Lorem ipsum inside a section");

paragraph.appendChild(paragraphText);
section.appendChild(paragraph);

console.log(section);