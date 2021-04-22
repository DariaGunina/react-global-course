import React from 'react';
import {shallow} from 'enzyme';
import {Tab, TabProps} from './Tab';

const setupComponent = (render: Function) => {
    const computedProps: TabProps = {
        label: 'test',
        value: 'test',
        onChange: jest.fn(),
        checked: true,
    };

    const wrapper = render(<Tab {...computedProps} />);

    return {
        wrapper,
        props: computedProps,
    };
};

describe('Tab', () => {
    describe('busic render', () => {
        it('should render', () => {
            const {wrapper} = setupComponent(shallow);

            expect(wrapper.exists()).toBeTruthy();
        });
    });

    describe('props', () => {
        it('should render label', () => {
            const expected = 'test';
            const {wrapper} = setupComponent(shallow, {
                label: expected,
            });

            expect(wrapper.text()).toEqual(expected);
        });

        it('should render value', () => {
            const expected = 'test';
            const {wrapper} = setupComponent(shallow, {
                value: expected,
            });

            expect(wrapper.text()).toEqual(expected);
        });
    });
});