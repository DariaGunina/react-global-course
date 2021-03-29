import React from 'react';
import {MovieCard} from '../MovieCard';
import styles from './MovieList.module.css';
import {useSelector} from 'react-redux';
import {MovieState} from '../../redux/reducer';
import {RootReducer} from '../../store';

export const MovieList = () => {
    const {moviesList} = useSelector<RootReducer, MovieState>((state) => state.movies);

    return (
        <div className={styles.list}>
            {moviesList?.map((movie) =>
                <MovieCard
                    image={movie.poster_path}
                    title={movie.title}
                    subtitle={movie.tagline}
                    year={String(new Date(movie.release_date).getFullYear())}
                    key={movie.id}
                    id={movie.id}
                />
            )}
        </div>
    );
};