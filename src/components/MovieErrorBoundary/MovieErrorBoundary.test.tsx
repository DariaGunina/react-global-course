import React from 'react';
import {mount} from 'enzyme';
import {MovieErrorBoundary} from './MovieErrorBoundary';

describe('MovieErrorBoundary', () => {
    const ErrorComponent = () => null;

    it('should display an ErrorMessage if wrapped component throws', () => {
        const wrapper = mount(
            <MovieErrorBoundary>
                <ErrorComponent />
            </MovieErrorBoundary>
        );

        const error = new Error('test');

        const result = wrapper.find(ErrorComponent).simulateError(error);
        expect(result.exists()).toBeTruthy();
    });
});