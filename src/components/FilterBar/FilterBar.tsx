import React from 'react';
import { sortOptions } from '../../redux/enums';

import styles from './FilterBar.module.css';

export interface FilterBarProps {
    onChange: (e: any) => void;
}

export const FilterBar = ({onChange}: FilterBarProps) => {

    return (
        <div className={styles.filter}>
            <p className={styles.name}>Sort by</p>
            <div className={styles.icon}>
                <select className={styles.dropdown} onChange={onChange}>
                    {Object.entries(sortOptions).map(([key, value]) => (
                        <option value={key} key={key}>{value}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};