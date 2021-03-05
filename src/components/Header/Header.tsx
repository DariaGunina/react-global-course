import React from 'react';
import {Logo} from '../Logo';
import {Button} from '../Button';
import {SearchBlock} from '../SearchBlock';
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