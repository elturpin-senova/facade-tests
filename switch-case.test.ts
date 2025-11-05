import { describe, expect, it } from 'vitest';

describe('switch-case', () => {
    it('should handle empty case by executing next one', () => {
        function action(arg: string) {
            switch (arg) {
                case 'A':
                    return 'A';
                case 'B':
                case 'C':
                    return 'BC';
                case 'D':
                default:
                    return 'default';
            }
        }

        expect(action('A')).toBe('A');
        expect(action('B')).toBe('BC');
        expect(action('C')).toBe('BC');
        expect(action('D')).toBe('default');
        expect(action('E')).toBe('default');
    });
});
