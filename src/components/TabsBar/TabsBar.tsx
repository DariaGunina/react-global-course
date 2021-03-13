import React from 'react';
import {FilterBar} from '../FilterBar';
import { Tab } from '../Tab';
import {Counter} from '../Сounter';
import {TABS} from '../mocks';

import styles from './TabsBar.module.css';

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
                    {TABS.map(({label, value, id}) => (
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
