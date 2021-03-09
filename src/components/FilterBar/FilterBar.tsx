import React from 'react';
import {dropdown} from '../mocks'

import styles from './FilterBar.module.css';

export const FilterBar = () => {

    return (
        <div className={styles.filter}>
            <p className={styles.name}>Sort by</p>
            <div className={styles.icon}>
                <select className={styles.dropdown}>
                    {dropdown.map((item) => (
                        <option value={item.value} key={item.value}>{item.label}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};