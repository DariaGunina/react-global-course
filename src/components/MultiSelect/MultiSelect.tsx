import React from 'react';

import styles from './MultiSelect.module.css';
import {OPTIONS} from "../mocks";

interface Props {
    value: any;
    isChecked: boolean;
    onChange: (value) => void;
    children: React.ReactNode;
}

export const CheckboxOption = ({value, isChecked, onChange, children}: Props) => {
    return (
        <label>
            <input
                type='checkbox'
                value={value}
                checked={isChecked}
                onChange={(e) => onChange(value)}
                className={styles.checkbox}
            />
            {children}
        </label>
    );
};

export const MultiSelect = ({onChange, initialValues}) => {
    const [genre, setGenre] = React.useState(new Set<string>(initialValues ?? []));

    React.useEffect(() => {
        onChange(Array.from(genre))
    }, [genre]);

    const onOptionChange = (value: string) => {
        const newSet = new Set(genre);
        newSet.has(value) ? newSet.delete(value) : newSet.add(value);
        setGenre(newSet)
    };

    return (
        <div>
            <details>
                <summary className={styles.multiSelect}>
                    { genre.size > 0
                    ? Array.from(genre).join(', ')
                    : 'Select Genre' }
                </summary>
                <div className={styles.options}>
                    {OPTIONS.map(option =>
                        <CheckboxOption
                            key={option.value}
                            value={option.value}
                            isChecked={genre.has(option.isChecked)}
                            onChange={onOptionChange}>
                            {option.label}
                        </CheckboxOption>
                    )}
                </div>
            </details>
        </div>
    );
};