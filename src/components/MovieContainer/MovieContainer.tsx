import React from 'react';
import {TabsBar} from '../TabsBar';
import {MovieErrorBoundary} from '../MovieErrorBoundary';
import {MovieList} from '../MovieList';
import {useDispatch} from 'react-redux';
import {getMovies} from '../../redux/action';
import {useNonNullContext} from '../../hooks/useNonNullContext';
import {FiltersContext} from './FiltersProvider';

import styles from './MovieContainer.module.css';

export const MovieContainer = () => {
    const dispatch = useDispatch();
    const {filter, sort, search, setFilter, setSort} = useNonNullContext(FiltersContext);

    React.useEffect(() => {
        getMovies(dispatch, {filter, sort, search});
    }, [sort, filter, search]);

    return (
        <div className={styles.container}>
            <TabsBar
                onSort={(e) => setSort(e.target.value)}
                onFilter={(e) => setFilter(e.target.value)}
                filter={filter}
            />
            <MovieErrorBoundary>
                <MovieList />
            </MovieErrorBoundary>
        </div>
    );
};
