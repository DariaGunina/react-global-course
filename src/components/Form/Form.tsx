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

export interface FormProps {
    formValues: FormValues;
    onSubmit: (e) => void;
    buttonName: string;
    movieID?: number;
    titleID?: string;
    onClose: () => void;
}

const validate = (values) => {
    return {
        ...(!values.title && { title: "Title is required" }),
        ...(!values.release_date && { release_date: "Date is required" }),
        ...(!values.poster_path && { poster_path: "Movie url is required" }),
        ...(!values.genres?.length && {
            genres: "Select at least one genre is proceed"
        }),
        ...(!values.overview && { overview: "Overview is required" }),
        ...(!values.runtime && { runtime: "Runtime is required" }),
    };
};

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
        validate,
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
                    error={formik.errors.title as string}
                    type='text'
                />
                <InputField
                    name='release_date'
                    label='Release Date'
                    placeholder='Select Date'
                    onChange={formik.handleChange}
                    value={formik.values.release_date}
                    error={formik.errors.release_date as string}
                    type='date'
                />
                <InputField
                    name='poster_path'
                    label='Movie URL'
                    placeholder='Movie URL here'
                    onChange={formik.handleChange}
                    value={formik.values.poster_path}
                    error={formik.errors.poster_path as string}
                    type='text'
                />
                <div className={styles.wrapper}>
                    <label className={styles.label}>
                       Genre
                        <MultiSelect
                            error={formik.errors.genres}
                            name='genres'
                            values={formik.values.genres}
                            testId='genres'
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
                    error={formik.errors.overview as string}
                    type='text'
                />
                <InputField
                    name='runtime'
                    label='Runtime'
                    placeholder='Runtime here'
                    onChange={formik.handleChange}
                    value={formik.values.runtime}
                    error={formik.errors.runtime as string}
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
                        testId="buttonSubmit"
                    />
                </div>
            </FormikProvider>
        </form>
)};