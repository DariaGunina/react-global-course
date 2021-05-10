import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearMovies} from '../../redux/action';
import {useNonNullContext} from '../../hooks/useNonNullContext';
import {RootReducer} from '../../store';
import {MovieState} from '../../redux/reducer';
import {Counter} from '../Сounter';
import {TabsBar} from '../TabsBar';
import {MovieErrorBoundary} from '../MovieErrorBoundary';
import {MovieList} from '../MovieList';
import {FiltersContext} from './FiltersProvider';

import styles from './MovieContainer.module.css'

export enum Mode {
    HOME,
    SEARCH,
    DETAILS
}

export const HomeContainer = () => {
    const dispatch = useDispatch();
    const {filter, setFilter, setSort} = useNonNullContext(FiltersContext);
    const {moviesList} = useSelector<RootReducer, MovieState>((state) => state.movies);

    React.useEffect(() => {
        clearMovies()(dispatch);
    }, []);

    return (
        <div className={styles.container}>
            <TabsBar
                onSort={(e) => setSort(e.target.value)}
                onFilter={(e) => setFilter(e.target.value)}
                filter={filter}
            />
            <Counter count={moviesList.length} />
            <MovieErrorBoundary>
                <MovieList moviesList={moviesList} />
            </MovieErrorBoundary>
        </div>
    );
};