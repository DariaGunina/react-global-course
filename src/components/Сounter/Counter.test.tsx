import React from 'react';
import {shallow} from 'enzyme';
import {CounterProps, Counter} from './Counter';

const setupComponent = (render: Function) => {
    const computedProps: CounterProps = {
        count: 1,
    };

    const wrapper = render(<Counter {...computedProps} />);

    return {
        wrapper,
        props: computedProps,
    };
};

describe('Counter', () => {
    describe('basic render', () => {
        it('should render', () => {
            const {wrapper} = setupComponent(shallow);

            expect(wrapper.exists()).toBeTruthy();
        });
    });

    describe('props', () => {
        it('should render props', () => {
            const {props} = setupComponent(shallow);

            expect(props.count).toBe(1);
        });
    });
});