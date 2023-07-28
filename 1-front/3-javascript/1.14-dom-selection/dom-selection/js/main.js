// Métodos de selección de DOM

// document.getElementById(elementId)
// Permite seleccionar aquel elemento de mi DOM cuyo ID sea igual al ID proporcionadoen el método. 
// Devuelve un único elemento de DOM.
const changeTitle = (newTitle) => {
    let heading = document.getElementById("main-heading");
    heading.innerText = newTitle;
}
changeTitle("Heading Title [ejecutando función]");

// // document.getElementsByClassName(className)
// Permite seleccionar todos los elementos que cuenten con la clase indicada en el método 
// Devuelve un objeto del tipo 'HTMLCollection'
const getAllListItems = () => {
    listItems = document.getElementsByClassName("list-group-item");
    console.log(listItems);
    for (let i = 0; i < listItems.length; i++) {
        /* Console.log de cada list item en 'i' -> innerText: muestra texto interno */
        console.log(listItems[i].innerText);
    }
}

// document.getElementsByTagName(tagName)
// Permite seleccionar todos los elementos cuyo tagName coincide con el tagName proporcionado
// Devuelve un objeto tipo HTMLCollection
const getAllInputs = () => {
    let inputs = document.getElementsByTagName("li");
    console.log(inputs);
}
getAllInputs(); /* Devuelve HTMLCollection con las entradas que se tengan que presentan cada uno de los inputs que se tienen */

// document.querySelector(cssSelector)
// Permite seleccionar el primer elemento que cumpla con el selector de CSS provisto como argumento
// Devuelve un único elemento de dom

// document.querySelectorAll(cssSelector)
// Permite seleccionar todos los elementos que cumplan con el eleccionar todos los elementos que cumplan con el selector de css provisto como argumento
// Devuelve una NodeList

/* Método 'add' para añadir clases -> .classList.add("bg-dark, "text-white") */
document.querySelectorAll('li');
let listItemsAdd = document.querySelectorAll('li');
listItemsAdd.forEach(item => {
    item.classList.add("bg-dark");
});

/* Método 'remove' para remover clases -> .classList.remove("bg-dark") */
document.querySelectorAll('li');
let listItemsRemove = document.querySelectorAll('li');
listItemsRemove.forEach(item => {
    item.classList.add("bg-dark");
});

/* Método 'toggle' (conmutar): si no tiene la clase la pone, si sí la tiene la quita -> .classList.toggle("class-name-example") */
document.querySelectorAll('li');
let listItemsToggle = document.querySelectorAll('li');
listItemsToggle.forEach(item => {
    item.classList.add("bg-dark");
});
