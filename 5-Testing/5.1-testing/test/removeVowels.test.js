import { describe, expect, expectTypeOf, test } from 'vitest';
import removeVowels from '../removeVowels.js';

describe('RemoveVowels', () => {
    test('It is a function', () => {
        expectTypeOf(removeVowels).toBeFunction();
    });
    test('Delete vowels', () => {
        expect(removeVowels('kodemia')).toBe('kdm');
        expect(removeVowels('javascript')).toBe('jvscrpt');
        expect(removeVowels('DEVELOPER')).toBe('DVLPR');
        expect(removeVowels('LINUX')).toBe('LNX');
    });
    test('Return a string', () => {
        expectTypeOf(removeVowels('kodemia')).toBeString();
    });
    test('Error if is received a value different than a string', () => {
        expect(() => removeVowels(0)).toThrow();
        expect(() => removeVowels(true)).toThrow();
        expect(() => removeVowels({})).toThrow();
        expect(() => removeVowels([])).toThrow();
    });
});
