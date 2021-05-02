import React from 'react';
import {shallow} from 'enzyme';
import {Tab} from '../Tab';
import {FilterBar} from '../FilterBar';
import {FilterKeys} from '../../redux/enums';
import {TabsBar, TabsBarProps} from './TabsBar';

const setupComponent = (render: Function) => {
    const computedProps: TabsBarProps = {
        onSort: jest.fn(),
        onFilter: jest.fn(),
        filter: FilterKeys.HORROR,
    };

    const wrapper = render(<TabsBar {...computedProps} />);

    return {
        wrapper,
        props: computedProps,
    };
};

describe('TabsBar', () => {
    describe('busic render', () => {
        it('should render', () => {
            const {wrapper} = setupComponent(shallow);

            expect(wrapper.exists()).toBeTruthy();
        });
    });

    describe('render components', () => {
        it('should render <Tab>', () => {
            const {wrapper} = setupComponent(shallow);
            wrapper.find(Tab);

            expect(wrapper.exists()).toBeTruthy();
        });

        it('should render <FilterBar>', () => {
            const {wrapper} = setupComponent(shallow);
            wrapper.find(FilterBar);

            expect(wrapper.exists()).toBeTruthy();
        });
    });
});