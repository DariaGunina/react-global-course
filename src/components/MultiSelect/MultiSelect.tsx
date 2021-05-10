import React from 'react';
import {Field} from 'formik';
import {OPTIONS} from './constants';

import styles from './MultiSelect.module.css';

interface Props {
    name: string
    value: any;
    children: React.ReactNode;
    testId?: string;
}

export const CheckboxOption = ({name, value, children, testId}: Props) => {
    return (
        <label>
            <Field
                name={name}
                type='checkbox'
                value={value}
                className={styles.checkbox}
                data-testid={testId}
            />
            {children}
        </label>
    );
};

export const MultiSelect = ({values, name, error, testId}) => {

    return (
        <>
            <details className={styles.details}>
                <summary
                    className={styles.multiSelect}
                    style={{ border: error ? '2px solid var(--bright-color)' : '' }}
                    data-testid={testId}
                >
                    { values?.length > 0 ? values?.join(', ') : 'Select Genre' }
                </summary>
                <div className={styles.options}>
                    {OPTIONS.map(({value, label}) =>
                        <CheckboxOption
                            name={name}
                            key={value}
                            value={value}
                            testId={`genre-${value}`}
                        >
                            {label}
                        </CheckboxOption>
                    )}
                </div>
            </details>
        </>
    );
};