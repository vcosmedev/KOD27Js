// Métodos de selección de DOM

// document.getElementById(elementId)
// Permite seleccionar aquel elemento de mi DOM cuyo ID sea igual al ID proporcionadoen el método. 
// Devuelve un único elemento de DOM.
const changeTitle = (newTitle) => {
    let heading = document.getElementById("main-heading");
    heading.innerText = newTitle;
}

// // document.getElementsByClassName(className)
// Permite seleccionar todos los elementos que cuenten con la clase indicada en el método 
// Devuelve un objeto del tipo 'HTMLCollection'
const getAllListItems = () => {
    listItems = document.getElementsByClassName("list-group-item");
    console.log(listItems);
    for (let i = 0; i < listItems.length; i++) {
        console.log(listItems[i].innerText);
    }
}

// document.getElementsByTagName(tagName)
// Permite seleccionar todos los elementos cuyo tagName coincide con el tagName proporcionado
// Devuelve un objeto tipo HTMLCollection
const getAllInputs = () => {
    let inputs = document.getElementsByTagName("li");
    console.log(inputs)
}

// document.querySelector(cssSelector)
// Permite seleccionar el primer elemento que cumpla con el selector de CSS provisto como argumento
// Devuelve un único elemento

// document.querySelectorAll(cssSelector)
// Permite seleccionar todos los elementos que cumpla con el eleccionar todos los elementos que cumplan con el selector de css provisto como argumento
// Devuelve una NodeList