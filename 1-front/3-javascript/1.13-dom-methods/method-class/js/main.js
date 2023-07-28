let koders = ["Moi", "Oli", "Vic"];

/* MÉTODOS DE CREACIÓN DE DOM */
/* Método para crear un elemento de dom */
let koderListItem = document.createElement("li");
/* Método para crear un nodo de texto */
let koderItemText = document.createTextNode("Nodo de texto");
koderListItem.appendChild(koderItemText);
console.log(koderListItem);
console.log(koderListItem);

let heading = document.createElement("h1");
let headingText = document.createTextNode("Módulo de JS");
heading.appendChild(headingText);
console.log(heading);

let section = document.createElement("section");
let paragraph = document.createElement("p");
let paragraphText = document.createTextNode("Lorem ipsum inside a section");

paragraph.appendChild(paragraphText);
section.appendChild(paragraph);

console.log(section);

/* MÉTODOS SELECCIÓN DE DOM */
/* Selección dom por ID */
let koderList = document.getElementById("koders-list");
console.log(koderList);

koderList.appendChild(koderListItem);

const createKoderListItem = (content) => {
    /* Método para crear elemento de dom */
    let koderListItem = document.createElement("li");
    /* Método para crear un nodo de texto */
    let koderItemText = document.createTextNode(content);
    koderListItem.appendChild(koderItemText);
    return koderListItem;
};

const printKodersList = (kodersArray /* array de datos */, listId /* elemento en el que quiero insertar los koders */) => {
    /* Obtenemos el elemento de dom en el que vamos a insertar los koders */
    let kodersList = document.getElementById(listId);
    /* Recorrer array de datos */
    kodersArray.forEach((koder) => {
        /* Creamos un elemento de lista por cada koder dentro del array */
        let listItem = createKoderListItem(koder);
        /* Lo insertamos en el nodo de dom que seleccionamos previamente */
        kodersList.appendChild(listItem);
    });
};