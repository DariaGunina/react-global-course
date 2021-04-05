import React from 'react';
import {Field} from 'formik';
import {OPTIONS} from './constants';

import styles from './MultiSelect.module.css';

interface Props {
    name: string
    value: any;
    children: React.ReactNode;
}

export const CheckboxOption = ({name, value, children}: Props) => {
    return (
        <label>
            <Field
                name={name}
                type='checkbox'
                value={value}
                className={styles.checkbox}
            />
            {children}
        </label>
    );
};

export const MultiSelect = ({values, name, error}) => {

    return (
        <>
            <details>
                <summary
                    className={styles.multiSelect}
                    style={{ border: error ? '2px solid var(--bright-color)' : '' }}
                >
                    { values?.length > 0 ? values?.join(', ') : 'Select Genre' }
                </summary>
                <div className={styles.options}>
                    {OPTIONS.map(option =>
                        <CheckboxOption
                            name={name}
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </CheckboxOption>
                    )}
                </div>
            </details>
        </>
    );
};