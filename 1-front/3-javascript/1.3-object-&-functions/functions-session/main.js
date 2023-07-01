function sumarDosNumeros() { // Definición función
    let a = 7;
    let  b= 5;
    let result = a + b;
    console.log(result);
}

sumarDosNumeros(); // Ejecución función


function numbersAddition(a, b) { // Definición función
    let result = a + b;
    console.log(result);
}

numbersAddition(7,5); // Ejecución función
numbersAddition(5,9); // Ejecución función
numbersAddition(11,5); // Ejecución función
numbersAddition(-12,-4); // Ejecución función
numbersAddition("a",2); // Ejecución función -> Ojo, concatena
numbersAddition("ár","bol"); // Ejecución función -> Suma, dos valores mismo tipo, string
numbersAddition(true, 1); // Ejecución función -> 3, true es 1
numbersAddition(false, 1); // Ejecución función -> 1, false es 0
numbersAddition({name: "Víctor"}, 1); // Ejecución función 
numbersAddition(["hola "], 1); // Ejecución función 


let names = ["Israel", "Eva", "Víctor", "Gorka", "Guadalupe", "Alessia"];

// Obtener primer elemento de un array
function getFirstName(nameList) {
    return nameList[0];
}

// Obtener elementos con menos de 5 letras de un array
// function getShortNames(nameList) {
//     let shortNames = nameList.filter
//     return shortNames;
// }
