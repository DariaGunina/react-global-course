import React from 'react';
import {Header} from '../../src/components/Header';
import {MovieContainer} from '../../src/components/MovieContainer';
import {Footer} from '../../src/components/Footer';
import {getMoviesRequest} from '../../src/api';

const SearchPage = ({movies}) => {
    return (
        <>
            <Header/>
            <MovieContainer data={movies.data} />
            <Footer/>
        </>
    );
};

export async function getServerSideProps(context) {
    const query = context.query;
    const movies = await getMoviesRequest({filter: query.filter, search: query.id, sort: query.sortBy});

    return {props: {movies}}
}

export default SearchPage;