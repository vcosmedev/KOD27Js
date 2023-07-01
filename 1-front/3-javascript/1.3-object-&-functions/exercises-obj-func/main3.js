// Crear función que reciba el nombre, color, tamaño, peso y raza 
// de un perro y devuelva un objeto que represente a ese perro

function getDog(name, color, size, weight, breed) {
    let dog = {
        name: name,
        color: color,
        size: size,
        weight: weight,
        breed: breed,
    }; 
    return dog;
}
let dog = getDog("Fido", "Black", "Small", "3kg", "Chihuahua");
console.log(dog);
let dog2 = getDog("Fido Jr", "Brown", "Small", "1kg", "Chihuahua");
console.log(dog2);