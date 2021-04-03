import React from 'react';
import {useSelector} from 'react-redux';
import {FilterBar} from '../FilterBar';
import { Tab } from '../Tab';
import {Counter} from '../Сounter';
import {FilterKeys, FilterOptions} from '../../redux/enums';
import {RootReducer} from '../../store';
import {MovieState} from '../../redux/reducer';

import styles from './TabsBar.module.css';

interface TabsBarProps {
    onSort: (e: any) => void;
    onFilter: (e: any) => void;
    filter: FilterKeys;
}

export const TabsBar = ({onSort, onFilter, filter}: TabsBarProps) => {
    const {moviesList} = useSelector<RootReducer, MovieState>((state) => state.movies);
    return (
        <>
            <div className={styles.tabsContainer}>
                <div className={styles.tabs}>
                    {Object.entries(FilterOptions).map(([key, label]) => (
                        <Tab
                            label={label}
                            value={key}
                            key={key}
                            checked={filter === key}
                            onChange={onFilter}
                        />
                    ))}
                </div>
                <FilterBar onChange={onSort} />
            </div>
            <Counter count={moviesList.length} />
        </>
    );
};
