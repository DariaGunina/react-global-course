import React from 'react';
import {FilterBar} from '../FilterBar';
import { Tab } from '../Tab';
import {FilterKeys, FilterOptions} from '../../redux/enums';

import styles from './TabsBar.module.css';

export interface TabsBarProps {
    onSort: (e: any) => void;
    onFilter: (e: any) => void;
    filter: FilterKeys;
}

export const TabsBar = ({
    onSort,
    onFilter,
    filter,
}: TabsBarProps) => (
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
    </>
);

