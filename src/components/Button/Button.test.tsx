import React from 'react';
import {shallow} from 'enzyme';
import {Button, ButtonProps} from './Button';

describe('Button', () => {
    const computedProps: ButtonProps = {
        onClick: jest.fn(),
        name: 'test',
    };

    const wrapper = shallow(<Button {...computedProps} />);

    describe('basic render', () => {
        it('should render', () => {
            expect(wrapper.exists()).toBeTruthy();
        });
    });

    describe('behaviour', () => {
        it('should handle button click', () => {
            wrapper.simulate('click');

            expect(computedProps.onClick).toHaveBeenCalled();
        });
    });
});