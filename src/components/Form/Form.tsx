import React from 'react';
import {FormikProvider, useFormik} from 'formik';
import {Button, BUTTON_TYPES} from '../Button';
import {MultiSelect} from '../MultiSelect/';
import {InputField} from './InputField';

import styles from './Form.module.css';

export interface FormValues {
    title?: string;
    release_date?: string;
    poster_path?: string;
    genres?: string[];
    overview?: string;
    runtime?: number;
    id?: number;
}

export interface Errors {
    title: string;
    release_date?: string;
    poster_path?: string;
    genres?: string;
    overview?: string;
    runtime?: string;
}

interface FormProps {
    formValues: FormValues;
    onSubmit: (e) => void;
    buttonName: string;
    movieID?: number;
    titleID?: string;
    onClose: () => void;
}

export const Form = ({
    movieID,
    titleID,
    formValues,
    onSubmit,
    buttonName,
    onClose,
}: FormProps) => {
    const formik = useFormik({
        initialValues: formValues,
        onSubmit: (values) => {
            onSubmit(values);
            onClose();
        },
        validate: values => {
            let error = {} as Errors;
            if(!values.title) {
                error.title = 'Title is required'
            }

            if(!values.release_date) {
                error.release_date = 'Date is required'
            }

            if(!values.poster_path) {
                error.poster_path = 'Movie url is required'
            }

            if(!values.genres?.length) {
                error.genres = 'Select at least one genre is proceed'
            }

            if(!values.overview) {
                error.overview = 'Overview is required'
            }

            if(!values.runtime) {
                error.runtime = 'Runtime is required'
            }

            return error
        }
    });

    return(
        <form onSubmit={formik.handleSubmit}>
            <FormikProvider value={formik}>
                <p className={styles.label}>{titleID}</p>
                <p className={styles.movieID}>{movieID}</p>
                <InputField
                    name='title'
                    label='Title'
                    placeholder='Title'
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    error={formik.errors.title}
                    type='text'
                />
                <InputField
                    name='release_date'
                    label='Release Date'
                    placeholder='Select Date'
                    onChange={formik.handleChange}
                    value={formik.values.release_date}
                    error={formik.errors.release_date}
                    type='date'
                />
                <InputField
                    name='poster_path'
                    label='Movie URL'
                    placeholder='Movie URL here'
                    onChange={formik.handleChange}
                    value={formik.values.poster_path}
                    error={formik.errors.poster_path}
                    type='text'
                />
                <div className={styles.wrapper}>
                    <label className={styles.label}>
                       Genre
                        <MultiSelect
                            error={formik.errors.genres}
                            name='genres'
                            values={formik.values.genres}
                        />
                     </label>
                    {
                        formik.errors.genres
                        ? <div className={styles.error}>{formik.errors.genres}</div>
                        : null
                    }
                </div>
                <InputField
                    name='overview'
                    label='Overview'
                    placeholder='Overview here'
                    onChange={formik.handleChange}
                    value={formik.values.overview}
                    error={formik.errors.overview}
                    type='text'
                />
                <InputField
                    name='runtime'
                    label='Runtime'
                    placeholder='Runtime here'
                    onChange={formik.handleChange}
                    value={formik.values.runtime}
                    error={formik.errors.runtime}
                    type='number'
                />
                <div className={styles.buttonContainer}>
                    <Button
                        className={styles.buttonReset}
                        name='Reset'
                        type={BUTTON_TYPES.RESET}
                        onClick={formik.resetForm}
                    />
                    <Button
                        className={styles.buttonSubmit}
                        type={BUTTON_TYPES.SUBMIT}
                        name={buttonName}
                    />
                </div>
            </FormikProvider>
        </form>
)};