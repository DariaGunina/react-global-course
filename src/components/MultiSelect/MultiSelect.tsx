import React from 'react';

import styles from './MultiSelect.module.css';

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
                    <CheckboxOption value='Crime' isChecked={genre.has('Crime')} onChange={onOptionChange}>
                        Crime
                    </CheckboxOption>
                    <CheckboxOption value='Documentary' isChecked={genre.has('Documentary')} onChange={onOptionChange}>
                        Documentary
                    </CheckboxOption>
                    <CheckboxOption value='Horror' isChecked={genre.has('Horror')} onChange={onOptionChange}>
                        Horror
                    </CheckboxOption>
                    <CheckboxOption value='Comedy' isChecked={genre.has('Comedy')} onChange={onOptionChange}>
                        Comedy
                    </CheckboxOption>
                </div>
            </details>
        </div>
    );
};