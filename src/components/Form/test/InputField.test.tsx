import React from 'react';
import {shallow} from 'enzyme';
import {InputField, InputFieldProps} from '../InputField';

const setupComponent = (render: Function, props: {} = {}) => {
    const computedProps: InputFieldProps = {
        label: 'Test',
        onChange: jest.fn(),
        name: 'Test',
        ...props,
    };

    const wrapper = render(<InputField {...computedProps} />);

    return {
        wrapper,
        instance: wrapper.instance(),
        props: computedProps,
    };
};

describe('InputField,', () => {
    describe('basic render', () => {
        it('should render', () => {
            const {wrapper} = setupComponent(shallow);

            expect(wrapper.exists()).toBeTruthy();
        });

        describe('props', () => {
            it('should render label', () => {
                const expected = 'Test';
                const {wrapper} = setupComponent(shallow, {
                    label: expected,
                });

                expect(wrapper.text()).toEqual(expected);
            });

            it('should render name', () => {
                const expected = 'Test';
                const {wrapper} = setupComponent(shallow, {
                    name: expected,
                });

                expect(wrapper.text()).toEqual(expected);
            });
        });
    });
});