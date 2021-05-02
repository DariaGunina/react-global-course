import React from 'react';

import styles from './Tab.module.css';

export interface TabProps {
    label: string;
    value: string;
    onChange: (e) => void;
    checked: boolean;
}

export const Tab = ({
    label,
    value,
    checked,
    onChange,
}: TabProps) => {
    return (
        <label>
            <input
                type='radio'
                name='radioTab'
                value={value}
                checked={checked}
                className={styles.tab}
                onChange={onChange}
            />
            <div className={styles.label}>{label}</div>
        </label>
    );
};