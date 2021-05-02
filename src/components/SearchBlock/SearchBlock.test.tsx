import React from 'react';
import {shallow} from 'enzyme';
import {SearchBlock, SearchBlockProps} from './SearchBlock';
import {Button} from '../Button';

const setupComponent = (render: Function) => {
    const computedProps: SearchBlockProps = {
        onSearch: jest.fn(),
        value: 'test',
        setValue: jest.fn(),
    };

    const wrapper = render(<SearchBlock {...computedProps} />);

    return {
        wrapper,
        props: computedProps,
    };
};

describe('SearchBlock', () => {
    describe('busic render', () => {
        it('should render', () => {
            const {wrapper} = setupComponent(shallow);

            expect(wrapper.exists()).toBeTruthy();
        });

    });

    describe('render component', () => {
        it('should render <Button>', () => {
            const {wrapper} = setupComponent(shallow);
            wrapper.find(Button);

            expect(wrapper.exists()).toBeTruthy();
        });
    });

    describe('behaviour', () => {
        it('should handle button click', () => {
            const {wrapper, props} = setupComponent(shallow);
            wrapper.find(Button).simulate('click');

            expect(props.onSearch).toHaveBeenCalled();
        });

        it('should change value in input', () => {
            const {wrapper, props} = setupComponent(shallow);
            wrapper.find('input').simulate('change', {
                target: {
                    value: 'test',
                },
            });

            expect(props.setValue).toHaveBeenCalled();
        });
    });
});