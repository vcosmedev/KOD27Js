import {describe, expectTypeOf, test} from vitest;
import countByCountry from '../countByCountry.js';
import artistsAndCities from '../db.js';

describe('Count by country', () => {
    test('It is a function', () => {
        expectTypeOf(countByCountry).toBeFunction()
    })
})