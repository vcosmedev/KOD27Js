import { describe, expect, expectTypeOf, test } from 'vitest';
import iva from '../iva.js'; // import function that want to be tested

describe('IVA test', () => {
    test('It is a function', () => {
        expectTypeOf(iva).toBeFunction();
    });
    test('Must return 16%', () => {
        expect(iva(100)).toBe(16);
        expect(iva(200)).toBe(32);
        expect(iva(0)).toBe(0);
    });
    test('Error if a number is not inserted', () => {
        expect(() => iva('a')).toThrowError();
    });
});
