import React from 'react';

import styles from './Logo.module.css';

interface LogoProps {
    onClick?: () => void;
}

export const Logo = ({onClick}: LogoProps) => {
    return (
        <div className={styles.logo} onClick={onClick}>
            <span className={styles.additionalColor}>
                netflix
            </span>
            roulette
        </div>
    );
};
