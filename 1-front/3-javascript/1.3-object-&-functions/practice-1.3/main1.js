// Crear una función que reciba un nombre y realice lo siguiente:
// - Si el nombre tiene más de 5 letras, imprime en pantalla "El nombre es largo"
// - De lo contario, imprimir "El nombre es corto"

function nameLenght(name) {
    if (name.length > 5) {
        console.log("This name has more than 5 characters")
    } else {
        console.log("This name has less or at least 5 characters")
    }
    return name;
}
nameLenght("Eva");
nameLenght("Víctor");
nameLenght("Aintzane");

// Conditional ternary operator 
function getNameLenght(name) {
    name.length > 5 ? "This name has more than 5 characters" : "This name has less or at least 5 characters";
    return name;
}
console.log(getNameLenght("Eva"));
console.log(getNameLenght("Víctor"));
console.log(getNameLenght("Aintzane"));