import React from 'react';
import {Tab} from '../Tab/Tab';

import styles from './TabsBar.module.css';
import {Counter} from '../Сounter/Counter';
import {FilterBar} from "../FilterBar/FilterBar";

export interface Tab {
    label: string;
    value: string;
    id: string;
}

interface TabsBarProps {
    tabs: Tab[];
}

export const TabsBar = ({tabs}: TabsBarProps) => {
    return (
        <>
            <div className={styles.tabsContainer}>
                <div className={styles.tabs}>
                    {tabs.map(({label, value, id}) => (
                        <Tab
                            label={label}
                            value={value}
                            key={id}
                        />
                    ))}
                </div>
                <FilterBar />
            </div>
            <Counter count={39} />
        </>
    );
};
