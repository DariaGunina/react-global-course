import React from 'react';
import {MovieCard} from '../MovieCard';
import styles from './MovieList.module.css';
import {Movie} from '../../redux/types';

interface MoviesListProps {
    moviesList: Movie[]
}

export const MovieList = ({moviesList}: MoviesListProps) => {
    return (
        <div className={styles.content}>
            {
                moviesList.length ?
                    <div className={styles.list}>
                        { moviesList.map((movie) =>
                            <MovieCard
                                image={movie.poster_path}
                                title={movie.title}
                                subtitle={movie.tagline}
                                year={`${new Date(movie.release_date).getFullYear()}`}
                                key={movie.id}
                                id={movie.id}
                            />
                        )}
                    </div> :
                    <p className={styles.title}>No Movies Found</p>
            }
        </div>
    );
};