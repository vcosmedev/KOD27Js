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

// Second solution
function createDog(argName, argColor, argSize, argWeight, argBreed) {
    let dog = {};
    dog.name = argName;
    dog.color = argColor;
    dog.size = argSize;
    dog.weight = argWeight;
    dog.breed = argBreed;
    return dog;
}
console.log(createDog("Fido III", "White", "Small", "1kg", "Chihuahua"));

// Object Literals Using Object Property Shorthand
// Third solution

function getDogObjectPropertyShorthand(name, color, size, weight, breed){
    let dog = {
        name,
        color,
        size,
        weight,
        breed
    }
    return dog;
}
console.log(getDogObjectPropertyShorthand("Fido IV", "Grey", "Small", "1.1kg", "Chihuahua"));