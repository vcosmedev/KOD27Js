// Se recopiló información de Spotify sobre los artistas más escuchados y se determinó el país donde tienen
// más reproducciones.

// Nos dan un arreglo de bojetos con esa información, cada objetio tiene el artista y el país.

// Crea una función que reciba este arreglo y regrese un único arreglo con las ciudades mencionadas en la data.
// Este arreglo no debe tener ciudades repetidas.

// function getCountries(countriesArr) {
//     let result = countriesArr.map((current) => current.country);
//     return [...new Set(result)];
// }

// export default getCountries;

export default function getCountriesReduce(artistsAndCountries) {
    return artistsAndCountries.reduce((uniqueCountries, current) => {
        const { country } = current;
        if (!uniqueCountries.includes(country)) {
            uniqueCountries.push(country);
        }
        return uniqueCountries;
    }, []);
}
