import React from 'react';
import {Menu} from '../Menu';
import MenuIcon from '../../assets/menu.svg';
import {MovieContext} from '../MovieDetails';

import styles from './MovieCard.module.css';

interface MovieCardProps {
    title: string;
    subtitle: string;
    year: number;
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
    const {setActiveMovie} = React.useContext(MovieContext);

    return (
        <div className={styles.image}>
            <img className={styles.card} src={image} onClick={() => setActiveMovie(id)} />
            <div className={styles.info}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.year}>{year}</p>
            </div>
            <p className={styles.subtitle}>{subtitle}</p>
            <MenuIcon
                onClick={() => setOpenMenu(true)}
                className={styles.menuIcon}
            />
            {
                openMenu &&
                <Menu
                    className={styles.containerMenu}
                    closeMenu={() => setOpenMenu(false)}
                />
            }
        </div>
    );
};