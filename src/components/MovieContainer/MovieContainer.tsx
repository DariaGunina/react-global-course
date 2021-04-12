import React from 'react';
import {useParams} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {TabsBar} from '../TabsBar';
import {MovieErrorBoundary} from '../MovieErrorBoundary';
import {MovieList} from '../MovieList';
import {clearMovies, getMovies} from '../../redux/action';
import {useNonNullContext} from '../../hooks/useNonNullContext';
import {RootReducer} from '../../store';
import {MovieState} from '../../redux/reducer';
import {FiltersContext} from './FiltersProvider';

import styles from './MovieContainer.module.css';

export enum Mode {
    HOME,
    SEARCH,
    DETAILS
}

interface MovieContainerProps {
    counter?: React.ReactNode;
    mode: Mode;
}


export const MovieContainer = ({
    mode,
    counter,
}: MovieContainerProps) => {
    const dispatch = useDispatch();
    const {filter, sort, setFilter, setSort, search} = useNonNullContext(FiltersContext);
    const {moviesList} = useSelector<RootReducer, MovieState>((state) => state.movies);

    const {Search} = useParams<{Search: any}>();

    React.useEffect(() => {
        switch (mode) {
            case Mode.HOME:
                clearMovies(dispatch);
                break;
            case Mode.SEARCH:
                getMovies(dispatch, {filter, sort, search: Search ?? search});
                break;
            case Mode.DETAILS:
                getMovies(dispatch, {filter, sort, search: Search ?? search});
                break;

        }

    }, [sort, filter, Search, mode]);

    return (
        <div className={styles.container}>
            <TabsBar
                onSort={(e) => setSort(e.target.value)}
                onFilter={(e) => setFilter(e.target.value)}
                filter={filter}
            />
            {counter}
            <MovieErrorBoundary>
                <MovieList moviesList={moviesList} />
            </MovieErrorBoundary>
        </div>
    );
};
