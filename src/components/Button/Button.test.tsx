import React from 'react';
import {shallow} from 'enzyme';
import {Button, ButtonProps} from './Button';

const setupComponent = (render: Function, props: {} = {}) => {
    const computedProps: ButtonProps = {
        onClick: jest.fn(),
        name: 'test',
        ...props,
    };

    const wrapper = render(<Button {...computedProps} />);

    return {
        wrapper,
        props: computedProps,
    };
};

describe('Button', () => {
    describe('basic render', () => {
        it('should render', () => {
            const {wrapper} = setupComponent(shallow);

            expect(wrapper.exists()).toBeTruthy();
        });
    });

    describe('behaviour', () => {
        it('should handle button click', () => {
            const {wrapper, props} = setupComponent(shallow);

            wrapper.simulate('click');

            expect(props.onClick).toHaveBeenCalled();
        });
    });
});