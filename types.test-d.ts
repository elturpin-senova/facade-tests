import { describe, expectTypeOf, it } from 'vitest';

describe('Union types with any', () => {
    it('should treat union with any as any', () => {
        type Any = string | any;
        const value: Any = 'hello';

        expectTypeOf(value).toBeAny();
    });
});
