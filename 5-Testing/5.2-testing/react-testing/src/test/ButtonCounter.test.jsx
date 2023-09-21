import { afterEach, beforeEach, describe, expect, test } from 'vitest';
import ButtonCounter from '../Components/ButtonCounter';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

beforeEach(() => render(<ButtonCounter />));
// Antes de cada test hay que renderizar el componente -> beforeEach()
// Import 'render' function from testing-libarry/react

afterEach(() => cleanup());
// Una vez termine el test, habrá que borrarlo/desmontarlo -> afterEach()
// Import 'cleanup' function from testing-library/react

describe('Button counter', () => {
    test('Must render', () => {
        expect(screen.getByText('0')).toBeDefined();
    });

    test('Increment by one after clicking', () => {
        const button = screen.getByText('0');
        expect(button.innerHTML).toBe('0');
        fireEvent.click(button);
        expect(button.innerHTML).toBe('1');
        fireEvent.click(button);
        fireEvent.click(button);
        fireEvent.click(button);
        fireEvent.click(button);
        expect(button.innerHTML).toBe('5');
    });
});

// https://testing-library.com/docs/queries/about
