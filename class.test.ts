import { describe, expect, it } from 'vitest';

describe('class', () => {
    it('should have properties discoverable', () => {
        class A {
            test?: boolean;
            plop?: string;

            constructor() {}
        }

        const a = new A();

        const properties = Object.getOwnPropertyNames(a);
        expect(properties).toHaveLength(2);
        expect(properties).toContain('plop');
        expect(properties).toContain('test');
    });
});
