import React from 'react';
import {MovieList} from '../MovieList/MovieList';
import {TabsBar} from '../TabsBar/TabsBar';
import {tabs} from '../mocks';
import {MovieErrorBoundary} from '../MovieErrorBoundary/MovieErrorBoundary';

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
