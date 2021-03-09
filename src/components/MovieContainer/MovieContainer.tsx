import React from 'react';
import {TabsBar} from '../TabsBar';
import {MovieErrorBoundary} from '../MovieErrorBoundary';
import {MovieList} from '../MovieList';
import {tabs} from '../mocks';

import styles from './MovieContainer.module.css';


export const MovieContainer = () => {
    return (
        <div className={styles.container}>
            <TabsBar tabs={tabs} />
            <MovieErrorBoundary>
                <MovieList />
            </MovieErrorBoundary>
        </div>
    );
};
