import React from 'react';
import {TabsBar} from '../TabsBar';
import {MovieErrorBoundary} from '../MovieErrorBoundary';
import {MovieList} from '../MovieList';
import {TABS} from '../mocks';

import styles from './MovieContainer.module.css';

export const MovieContainer = () => {
    return (
        <div className={styles.container}>
            <TabsBar tabs={TABS} />
            <MovieErrorBoundary>
                <MovieList />
            </MovieErrorBoundary>
        </div>
    );
};
