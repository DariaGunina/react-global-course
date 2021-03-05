import React from 'react';
import {Button} from '../Button';

import styles from './SearchBlock.module.css';

export const SearchBlock = () => {
    return (
        <div className={styles.searchBlock}>
            <h1 className={styles.title}>Find your movie</h1>
            <input className={styles.input} type='text' placeholder='What do you want to watch?' />
            <Button className={styles.button} name='Search' />
        </div>
    );
};