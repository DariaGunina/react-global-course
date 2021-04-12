import React from 'react';

import styles from './MovieDetails.module.css';

interface MovieDetailsProps {
    poster: string;
    title: string;
    tagline: string;
    vote: number;
    date: string;
    runtime: number;
    overview: string;
}

export const MovieDetails = ({
    poster,
    title,
    tagline,
    vote,
    date,
    runtime,
    overview
}: MovieDetailsProps) => {
    return (
        <div className={styles.content}>
            <img className={styles.poster} src={poster} alt='poster' />
            <div>
                <div className={styles.info}>
                    <h1 className={styles.title}>{title}</h1>
                    <div className={styles.vote}>{vote}</div>
                </div>
                <p className={styles.tagline}>{tagline}</p>
                <div className={styles.date}>
                    <span>{date}</span>
                    <span>{runtime} min</span>
                </div>
                <p className={styles.overview}>{overview}</p>
            </div>
        </div>
    );
};