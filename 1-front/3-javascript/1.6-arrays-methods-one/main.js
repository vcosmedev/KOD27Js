let namesArray = [
    "Víctor",
    "Lorena",
    "Laura",
    "Indira",
    "Felipe",
    "Jose",
    "Carmen"
]

console.log(namesArray);
console.log(namesArray[2]); // output: Laura
console.log(namesArray[2], namesArray[5]); // output: Laura Jose


// Bucle for

for (let i = 0; i < namesArray.length; i++) {
    const element = namesArray[i];
    console.log(element)
}

const printAllElements = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const currentItem = arr[i];
        console.log(currentItem);
    }
}
printAllElements(namesArray);