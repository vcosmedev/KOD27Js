// 4.- Teniendo en cuenta el array 'countries', se requiere obtener un string que esté formado
// con la primera letra de cada país incluido en el array 
// Mexico Alemania -> MA

const countries = ["México", "Canadá", "Brasil", "España"];

let getFirstLetter = (countries) => {
    let firstLetter = "";
    for (let i = 0; i < countries.length; i++) {
        firstLetter += countries[i].charAt(0);
    }
    return firstLetter;
}
console.log(getFirstLetter(countries));