import React from 'react';
import {Button} from '../Button/Button';
import {Logo} from '../Logo/Logo';
import {SearchBlock} from '../SearchBlock/SearchBlock';
import Background from '../../assets/image.jpg';

import styles from './Header.module.css';

const BackgroundStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover'
};

export const Header = () => {
    return (
        <header className={styles.header} style={BackgroundStyle}>
            <div className={styles.content}>
                <Logo />
                <Button className={styles.button} name='+ Add Movie' />
            </div>
            <SearchBlock />
        </header>
    );
};