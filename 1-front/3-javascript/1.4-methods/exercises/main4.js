// Se necesita reemplazar todas las coincidencias de una palabra dentro de un texto,
// con otra palabra. Por ejemplo:
// "Mi perro es gris y es un latoso" | "es" | "no es"
// Result -> "Mi perro no es gris y no es un latoso"

const replaceWords = (string) => {
    console.log(string.replace(/es/g, "no es"));
}

replaceWords("Mi perro es gris y es un latoso");
replaceWords("Mi gato pequeño es marrón y es esquivo");