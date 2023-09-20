import { describe, expect, expectTypeOf, test } from 'vitest';
import countByCountry from '../countByCountry.js';
import artistsAndCountries from '../db.js';

const testData = [
    {
        artist: 'Bad Gyal',
        country: 'Spain',
    },
    {
        artist: 'Omar Apollo',
        country: 'USA',
    },
    {
        artist: 'Bjork',
        country: 'Iceland',
    },
];

describe('Count by country', () => {
    test('It is a function', () => {
        expectTypeOf(countByCountry).toBeFunction();
    });
    test('Return an object', () => {
        expectTypeOf(countByCountry(artistsAndCountries)).toBeObject();
    });
    test('Return an object with a key per country', () => {
        const result = countByCountry(testData);

        expectTypeOf(result.spain).not.toBeUndefined();
        // expect(result).has.property('iceland');
    });
});
