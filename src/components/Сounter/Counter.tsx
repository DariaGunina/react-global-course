import React from 'react';

import styles from './Counter.module.css';

export interface CounterProps {
    count: number;
}

export const Counter = ({count}: CounterProps) => {
    return (
        <div className={styles.counter}>
            {count}
            <span className={styles.counter__additionalColor}>movies found</span>
        </div>
    );
};