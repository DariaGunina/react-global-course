import React from 'react';

import styles from './MovieDetails.module.css';

interface MovieDetailsProps {
    image: string;
    title: string;
    subtitle: string;
    rating: number;
    year: number;
    time: string;
    descriptions: string;
}

export const MovieDetails = ({
    image,
    title,
    subtitle,
    rating,
    year,
    time,
    descriptions
}: MovieDetailsProps) => {
    return (
        <div className={styles.content}>
            <img className={styles.image} src={image} />
            <div>
                <div className={styles.info}>
                    <h1 className={styles.title}>{title}</h1>
                    <div className={styles.rating}>{rating}</div>
                </div>
                <p className={styles.text}>{subtitle}</p>
                <div className={styles.data}>
                    <span>{year}</span>
                    <span>{time}</span>
                </div>
                <p className={styles.text}>{descriptions}</p>
            </div>
        </div>
    );
};