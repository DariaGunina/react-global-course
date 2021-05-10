import React from 'react';
import Link from 'next/link';

import styles from './SearchBlock.module.css';

export interface SearchBlockProps {
    onSearch: string;
    value: string;
    setValue: (e) => void;
}

export const SearchBlock = ({
    onSearch,
    value,
    setValue,
}: SearchBlockProps) => {
    return (
        <div className={styles.searchBlock}>
            <h1 className={styles.title}>Find your movie</h1>
            <input
                className={styles.input}
                value={value}
                onChange={setValue}
                type='text'
                placeholder='What do you want to watch?'
            />
            <Link href={onSearch}>
                <a className={styles.search}>Search</a>
            </Link>
        </div>
    );
};