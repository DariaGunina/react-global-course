import React from 'react';

import styles from './Tab.module.css';

interface TabProps {
    label: string;
    value: string;
}

export const Tab = ({
    label,
    value,
}: TabProps) => {
    return (
        <label>
            <input
                type='radio'
                name='radioTab'
                value={value}
                checked
                className={styles.tab}
            />
            <div className={styles.label}>{label}</div>
        </label>
    );
};