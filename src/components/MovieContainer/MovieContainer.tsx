import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {dispatchMovies, getMovies} from '../../redux/action';
import {useNonNullContext} from '../../hooks/useNonNullContext';
import {RootReducer} from '../../store';
import {MovieState} from '../../redux/reducer';
import {Movie} from '../../redux/types';
import {Counter} from '../Сounter';
import {TabsBar} from '../TabsBar';
import {MovieErrorBoundary} from '../MovieErrorBoundary';
import {MovieList} from '../MovieList';
import {FiltersContext} from './FiltersProvider';

import styles from './MovieContainer.module.css';

interface MovieContainerProps {
    data: Movie[];
}

export const MovieContainer = ({
    data
}: MovieContainerProps) => {
    const dispatch = useDispatch();
    const {filter, sort, setFilter, setSort, search} = useNonNullContext(FiltersContext);
    const {moviesList} = useSelector<RootReducer, MovieState>((state) => state.movies);

    React.useEffect(() => {
        dispatchMovies(data)(dispatch);
    }, [data]);

    React.useEffect(() => {
        getMovies({filter, sort, search})(dispatch)
    }, [filter, sort]);

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
