import React from 'react';
import {Button} from '../Button';
import {MultiSelect} from '../MultiSelect/';

import styles from './Form.module.css';

interface FormProps {
    initialValues?: FormValues;
}

interface FormValues {
    title: string;
    date: string;
    url: string;
    genre: string[];
    overview: string;
    runtime: string;
}

export const Form = ({
    initialValues
}: FormProps) => {
    const [formData, setFormData] = React.useState<FormValues>(initialValues ?? {} as FormValues);

    const handleTitleChange = (value) => {
        setFormData(prevState => ({...prevState, title: value}))
    };

    const handleDateChange = (value) => {
        setFormData(prevState => ({...prevState, date: value}))
    };

    const handleUrlChange = (value) => {
        setFormData(prevState => ({...prevState, url: value}))
    };

    const handleOverviewChange = (value) => {
        setFormData(prevState => ({...prevState, overview: value}))
    };

    const handleRuntimeChange = (value) => {
        setFormData(prevState => ({...prevState, runtime: value}))
    };

    const onMultiSelectChange = (values) => setFormData(prevState => ({...prevState, genre: values}))

    return (
        <form className={styles.form}>
            <div className={styles.wrapper}>
                <label className={styles.label}>
                    Title
                    <input
                        value={formData.title}
                        onChange={e => handleTitleChange(e.target.value)}
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
                        value={formData.date}
                        onChange={e => handleDateChange(e.target.value)}
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
                        value={formData.url}
                        onChange={e => handleUrlChange(e.target.value)}
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
                    <MultiSelect onChange={onMultiSelectChange} initialValues={formData?.genre}/>
                </label>
            </div>
            <div className={styles.wrapper}>
                <label className={styles.label}>
                    Overview
                    <input
                        value={formData.overview}
                        onChange={e => handleOverviewChange(e.target.value)}
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
                        value={formData.runtime}
                        onChange={e => handleRuntimeChange(e.target.value)}
                        type='text'
                        placeholder='Runtime here'
                        className={styles.input}
                        required
                    />
                </label>
            </div>
            <div className={styles.buttonContainer}>
                <Button className={styles.buttonReset} name='Reset' />
                <Button className={styles.buttonSubmit} name='Submit' />
            </div>
        </form>
    );
};

export default Form;