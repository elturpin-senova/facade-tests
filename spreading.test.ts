import { describe, expect, it } from 'vitest';

function mergeIfTrue(
    a: Record<any, any>,
    b: Record<any, any>,
    doMerge: boolean
) {
    return {
        ...a,
        ...(doMerge && b),
    };
}

describe('destructuring', () => {
    it('should not merge', () => {
        const a = { x: 1, y: 2 };
        const b = { x: 'x', z: 'z' };

        expect(mergeIfTrue(a, b, false)).toEqual(a);
    });
    it('should do merge', () => {
        const a = { x: 1, y: 2 };
        const b = { x: 'x', z: 'z' };

        expect(mergeIfTrue(a, b, true)).toEqual({ ...a, ...b });
    });
});
