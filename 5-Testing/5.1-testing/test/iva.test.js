import { describe, expectTypeOf, test } from 'vitest';
import iva from './iva.test.js'; // import function that want to be tested

describe('IVA test', () => {
    test('It is a function', () => {
        expectTypeOf(iva).toBeFunction();
    });
});
