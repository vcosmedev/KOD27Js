// Crar una función que reciba el nombre y los apellidos de una persona y devuelva
// la cantidad de caracteres del nombre completo

function fullName(name, surname){
    let lengthFullName = (parseInt(name.lenght) + parseInt(surname.length));
    console.log(typeof(name.length))
    console.log(typeof(surname.length))
    return typeof(lengthFullName);
}

console.log(fullName("Víctor", "Cosme"));
console.log(typeof(fullName("Víctor", "Cosme")));