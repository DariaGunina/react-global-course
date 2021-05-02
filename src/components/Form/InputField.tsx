import React from 'react';

import styles from './Form.module.css';

export interface InputFieldProps {
    label: string;
    type?: string;
    placeholder?: string;
    isRequired?: boolean;
    onChange: (e: any) => void;
    value?: string | number;
    error?: string;
    name: string;
}

export const InputField = ({
    label,
    type,
    placeholder,
    isRequired,
    onChange,
    name,
    value,
    error,
}: InputFieldProps) => {

    return (
        <div className={styles.wrapper}>
            <label className={styles.label}>
                {label}
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    className={styles.input}
                    required={isRequired}
                    onChange={onChange}
                    value={value}
                    style={{ border: error ? '2px solid var(--bright-color)' : '' }}
                />
            </label>
            {error ? (
                <div className={styles.error}>{error}</div>
            ) : null}
        </div>
    )
};