import { describe, expect, it } from 'vitest';
import z from 'zod';

describe('object', () => {
    it('should strip extra properties', () => {
        const schema = z.object({
            name: z.string(),
            age: z.int().nonnegative(),
        });

        const result = schema.parse({
            name: 'Plop',
            age: 42,
            hello: 'hello ?',
        });

        expect(result).toEqual({
            name: 'Plop',
            age: 42,
        });
    });

    it('should strip extra properties in nested object', () => {
        const schema = z.object({
            name: z.string(),
            age: z.int().nonnegative(),
            address: z.object({
                street: z.string(),
            }),
        });

        const result = schema.parse({
            name: 'Plop',
            age: 42,
            hello: 'hello ?',
            address: {
                street: 'plop',
                top: 'bot',
            },
        });

        expect(result).toEqual({
            name: 'Plop',
            age: 42,
            address: {
                street: 'plop',
            },
        });
    });
});
