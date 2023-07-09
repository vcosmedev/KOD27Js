// Se requiere obtener un array que contenga los mismos nombres de cada país,
// pero escritos en mayúsculas

const countries = ["México", "Canadá", "Brasil", "España"];

let turnToUpperCase = (countries) => {
    let upperCase = [];
    for (let i = 0; i < countries.length; i++) {
        upperCase[i] = countries[i].toUpperCase();
    }
    return upperCase;
}
console.log(turnToUpperCase(countries));