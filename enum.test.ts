import { describe, expect, it } from 'vitest';

describe('Enums', () => {
    it('should returns the enum key as a string', () => {
        enum Color {
            Red,
            Green,
        }

        expect(Color[1]).toBe('Green');
        expect(Color[Color.Red]).toBe('Red');
    });

    it('should returns the enum key as a string', () => {
        enum LABELS {
            MAX = 'MAX',
            ESTIMATED = 'ESTIMATED',
        }

        expect(LABELS['MAX']).toBe('MAX');
        expect(LABELS[LABELS.ESTIMATED]).toBe('ESTIMATED');
    });
});
