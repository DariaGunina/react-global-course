import React from 'react';

import styles from './Counter.module.css';

interface CountProps {
    count: number;
}

export const Counter = ({count}: CountProps) => {
    return (
        <div className={styles.counter}>
            {count}
            <span className={styles.counter__additionalColor}>movies found</span>
        </div>
    );
};