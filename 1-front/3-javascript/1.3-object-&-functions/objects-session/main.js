// Objeto literal - No se usa ninguna función constructura para crearlo

// let milaneso = {
//     type: "Chihuahua",
//     color: "Black",
//     size: "Small",
//     weight: "Light"
// }

// console.log(milaneso);
// console.log(milaneso.type); // Access to an object's property
// console.log(milaneso.size); // Access to an object's property

// milaneso.color = "Brown"; // Change value's property of an object
// console.log(milaneso);
// milaneso.height = "1"; // Add new property and value to an object
// console.log(milaneso);
// milaneso.isVaccinated = "true"; // Add new property and value to an object
// console.log(milaneso);
// milaneso.vaccinesList = ["Parvovirus", "Quintuple"];
// milaneso.owner = {
//     name: "Ander",
//     mobilePhone: "55 5555 5555",
//     address: { street: "Av. Insurgentes", number: "444", district: "Roma Sur"},
// }

// console.log(milaneso);
// console.log(milaneso.owner); // Navigate intro object's property -> Access to property's object (nesting)
// console.log(milaneso.owner.nombre); // Navigate intro object's property -> Access to property's object (nesting)
// console.log(milaneso.owner.nombre.district); // Navigate intro object's property -> Access to property's object (nesting)


// delete milaneso.size; // Remove property from an object
// console.log(milaneso);

// ¿POR QUÉ USAMOS CONST O LET CON UN OBJETO?
// CONST -> Evita usar una referencia

let dog = {
    name: "Dolce"
}

dog = "Dolce";
console.log(dog);