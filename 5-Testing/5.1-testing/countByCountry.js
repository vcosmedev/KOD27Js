// Se recopiló información de Spotify sobre los artistas más escuchados y se determinó el país donde tienen
// más reproducciones.

// Nos dan un arreglo de bojetos con esa información, cada objetio tiene el artista y el país.

// Crea una función que reciba este arreglo y regrese un objeto donde cada llave sea un país y el valor
// se al número de artistas top en ese país.

function countByCountry(artistsAndCountries) {
    const countryCount = artistsAndCountries.reduce(
        (countriesObject, current) => {
            const { country } = current;
            const currentCount = countriesObject[country] || 0;
            countriesObject[country] = currentCount + 1;

            // if (countriesObject[country]) {
            //     countriesObject[country] += 1;
            // } else {
            //     countriesObject[country] = 1;
            // }
            return countriesObject;
        },
        {}
    );
    return countryCount;
}

/* 

accum[country]++ || (accum[country] = 1);
return accum;

*/

export default countByCountry;
