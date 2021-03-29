import React from 'react';
import {Button} from '../Button';

import styles from './SearchBlock.module.css';

interface SearchBlockProps {
    onSearch: (e) => void;
    value: string;
    setValue: (e) => void;
}

export const SearchBlock = ({
    onSearch,
    value, setValue
}: SearchBlockProps) => {
    return (
        <div className={styles.searchBlock}>
            <h1 className={styles.title}>Find your movie</h1>
            <input className={styles.input} value={value} onChange={setValue} type='text' placeholder='What do you want to watch?' />
            <Button className={styles.button} name='Search' onClick={onSearch} />
        </div>
    );
};