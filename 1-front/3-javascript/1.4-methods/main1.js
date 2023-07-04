/* Se necesita saber de cualquier string, el caracter que se encuentre 
   en cualquier posición que sea indicada:

   1- Si la posición excede la cantidad de caracteres, indicar
      que no es posible ejecutar el ejercicio.

*/

// Función ordinaria
function getCharacter2(string, position) {
    if (string.length > position) {
        console.log(string.charAt(position));
    } else {
        console.log("No encuentro esa posición");
    }
}
getCharacter2("Hello", 4);

// Simplificada
const getCharacter = (string, position) => string.length > position ? console.log(string.charAt(position)) : console.log("No encuentro esa posición");
getCharacter("Hola", 4);
