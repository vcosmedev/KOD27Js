import calculateIVA from './iva.js';
import removeVowels from './removeVowels.js';
import { countByCountry } from './spotify.js';
import getCountries from './spotifycountries.js';
import artistsAndCities from './spotifydb.js';

console.log(calculateIVA(100));
console.log(calculateIVA(1000));
// console.log(calculateIVA('a'));

console.log(removeVowels('kodemia'));
console.log(removeVowels('kodemia'));
console.log(removeVowels('DEVELOPER'));
console.log(removeVowels('LINUX'));

console.log(countByCountry(artistsAndCities));

console.log(getCountries(artistsAndCities));
