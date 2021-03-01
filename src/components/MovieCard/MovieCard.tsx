import React from 'react';
import MenuIcon from '../../assets/menu.jpg';

import styles from './MovieCard.module.css';

interface MovieCardProps {
    title: string;
    subtitle: string;
    year: number;
    image: string;
}

export const MovieCard = ({
    title,
    subtitle,
    year,
    image
}: MovieCardProps) => {
    return (
        <div className={styles.image}>
            <img className={styles.card} src={image} />
            <div className={styles.info}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.year}>{year}</p>
            </div>
            <p className={styles.subtitle}>{subtitle}</p>
            <img src={MenuIcon} className={styles.menuIcon}/>
        </div>
    );
};