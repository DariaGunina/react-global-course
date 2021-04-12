import React from 'react';
import {useSelector} from 'react-redux';
import {Header} from '../../components/Header';
import {MovieContainer} from '../../components/MovieContainer';
import {Mode} from '../../components/MovieContainer';
import {Counter} from '../../components/Сounter';
import {Footer} from '../../components/Footer';
import {RootReducer} from '../../store';
import {MovieState} from '../../redux/reducer';

export const SearchPage = () => {
    const {moviesList} = useSelector<RootReducer, MovieState>((state) => state.movies);
    return (
        <>
            <Header/>
            <MovieContainer
                mode={Mode.SEARCH}
                counter={<Counter count={moviesList.length} />}
            />
            <Footer/>
        </>
    );
};