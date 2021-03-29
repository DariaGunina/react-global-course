import React from 'react';
import {Button} from '../Button';
import {MultiSelect} from '../MultiSelect/';

import styles from './Form.module.css';

export interface FormValues {
    title?: string;
    date?: string;
    urlMovie?: string;
    genre?: string[];
    overview?: string;
    runtime?: number;
    id?: number;
}

interface FormProps {
    values: FormValues;
    setValues: (name, value) => void;
    onSubmit: (e) => void;
    onReset: () => void;
}

export const Form = ({
    values,
    setValues,
    onSubmit,
    onReset
}: FormProps) => {

    return (
        <form className={styles.form}>
            <div className={styles.wrapper}>
                <label className={styles.label}>
                    Title
                    <input
                        value={values.title}
                        onChange={e => setValues('title', e.target.value)}
                        type='text'
                        placeholder='Title'
                        className={styles.input}
                        required
                    />
                </label>
            </div>
            <div className={styles.wrapper}>
                <label className={styles.label}>
                    Release Date
                    <input
                        value={values.date}
                        onChange={e => setValues('date', e.target.value)}
                        type='date'
                        placeholder='Select Date'
                        className={styles.input}
                        required
                    />
                </label>
            </div>
            <div className={styles.wrapper}>
                <label className={styles.label}>
                    Movie URL
                    <input
                        value={values.urlMovie}
                        onChange={e => setValues('urlMovie', e.target.value)}
                        type='text'
                        placeholder='Movie URL here'
                        className={styles.input}
                        required
                    />
                </label>
            </div>
            <div className={styles.wrapper}>
                <label className={styles.label}>
                    Genre
                    <MultiSelect onChange={values => setValues('genre', values)} initialValues={values.genre}/>
                </label>
            </div>
            <div className={styles.wrapper}>
                <label className={styles.label}>
                    Overview
                    <input
                        value={values.overview}
                        onChange={e => setValues('overview', e.target.value)}
                        type='text'
                        placeholder='Overview here'
                        className={styles.input}
                        required
                    />
                </label>
            </div>
            <div className={styles.wrapper}>
                <label className={styles.label}>
                    Runtime
                    <input
                        value={values.runtime}
                        onChange={e => setValues('runtime', e.target.value)}
                        type='number'
                        placeholder='Runtime here'
                        className={styles.input}
                        required
                    />
                </label>
            </div>
            <div className={styles.buttonContainer}>
                <Button className={styles.buttonReset} name='Reset' onClick={onReset} />
                <Button className={styles.buttonSubmit} name='Submit' onClick={onSubmit} />
            </div>
        </form>
    );
};