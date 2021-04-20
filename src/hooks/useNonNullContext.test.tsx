import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useNonNullContext } from './useNonNullContext';

const TestContext = React.createContext<number | null>(null);

describe('useNonNullContext', () => {
    describe('when called without the provider', () => {
        const hook = renderHook(ctx => useNonNullContext(ctx), {
            initialProps: TestContext,
        });

        it('should throw an error', () => {
            expect(hook.result.error).toEqual(new Error('Provider is missing'));
        });
    });

    describe('when called with the provider', () => {
        const hook = renderHook(ctx => useNonNullContext(ctx), {
            initialProps: TestContext,
            wrapper: ({ children }) => <TestContext.Provider value={0}>{children}</TestContext.Provider>,
        });

        it('should return a value from the provider', () => {
            expect(hook.result.current).toBe(0);
        });
    });
});
