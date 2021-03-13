import React from 'react';
import {MovieCard} from '../MovieCard';
import {MOVIES} from '../mocks';

import styles from './MovieList.module.css';

export const MovieList = () => {
    return (
        <div className={styles.list}>
            {MOVIES.map((movie) => (
                <MovieCard
                    image={movie.image}
                    title={movie.title}
                    subtitle={movie.subtitle}
                    year={movie.year}
                    key={movie.id}
                />
            ))}
        </div>
    );
};