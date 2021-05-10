import React from 'react';
import Link from 'next/link';
import MenuIcon from '../../assets/menu.svg';
import {Menu} from '../Menu';

import styles from './MovieCard.module.css';

interface MovieCardProps {
    title: string;
    subtitle: string;
    year: string;
    image: string;
    id: number;
}

export const MovieCard = ({
    title,
    subtitle,
    year,
    image,
    id
}: MovieCardProps) => {
    const [openMenu, setOpenMenu] = React.useState(false);

    return (
        <div className={styles.image}>
            <Link href={`/film/[idFilm]`} as={`/film/${id}`}>
                <img
                    className={styles.card}
                    src={image}
                    alt='image'
                />
            </Link>
            <div className={styles.info}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.year}>{year}</p>
            </div>
            <p className={styles.subtitle}>{subtitle}</p>
            <img src={MenuIcon}  onClick={() => setOpenMenu(true)} className={styles.menuIcon} alt="image"/>
            {
                openMenu &&
                <Menu
                    className={styles.containerMenu}
                    closeMenu={() => setOpenMenu(false)}
                    id={id}
                />
            }
        </div>
    );
};