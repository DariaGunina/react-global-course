import React from 'react';
import {shallow} from 'enzyme';
import {FilterBarProps, FilterBar} from './FilterBar';

const setupComponent = (render: Function) => {
    const computedProps: FilterBarProps = {
        onChange: jest.fn(),
    };

    const wrapper = render(<FilterBar {...computedProps} />);

    return {
        wrapper,
        instance: wrapper.instance(),
        props: computedProps,
    };
};

describe('FilterBar', () => {
    it('should render', () => {
        const {wrapper} = setupComponent(shallow);

        expect(wrapper.exists()).toBeTruthy();
    });
});