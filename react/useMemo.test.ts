// @vitest-environment jsdom
import { act, renderHook } from '@testing-library/react';
import { useMemo, useState } from 'react';
import { describe, expect, it, vi } from 'vitest';

describe('useMemo', () => {
    it('should work correctly', async () => {
        const spy = vi.fn();
        function useCustomHook() {
            const [a, setA] = useState(0);
            const memoizedValue = useMemo(() => {
                spy(a);
                return a;
            }, [a]);
            return { memoizedValue, setA };
        }

        const { result } = renderHook(() => useCustomHook());

        expect(result.current.memoizedValue).toBe(0);
        let test = result.current.memoizedValue + result.current.memoizedValue;
        expect(test).toBe(0);
        expect(spy).toHaveBeenCalledTimes(1);
        spy.mockClear();

        act(() => {
            result.current.setA(1);
        });

        expect(result.current.memoizedValue).toBe(1);
        test = result.current.memoizedValue + result.current.memoizedValue;
        expect(test).toBe(2);
        expect(spy).toHaveBeenCalledTimes(1);
    });
});
