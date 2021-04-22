import React from 'react';
import {shallow} from 'enzyme';
import {MovieDetails, MovieDetailsProps} from './MovieDetails';

const setupComponent = (render: Function) => {
    const computedProps: MovieDetailsProps = {
        poster: 'test',
        title: 'test',
        tagline: 'test',
        vote: 1,
        date: '12.02.2010',
        runtime: 23,
        overview: 'test',
    };

    const wrapper = render(<MovieDetails {...computedProps} />);

    return {
        wrapper,
        props: computedProps,
    };
};

describe('MovieDetails', () => {
    describe('busic render', () => {
        it('should render', () => {
            const {wrapper} = setupComponent(shallow);

            expect(wrapper.exists()).toBeTruthy();
        });
    });
});