import React from 'react';
import {useDispatch} from 'react-redux';
import {
    Form,
    FormValues,
} from './Form';
import {createMovies} from '../../redux/action';

export interface AddMovieFormProps {
    onClose: () => void;
}

export const AddMovieForm = ({onClose}: AddMovieFormProps) => {
    const dispatch = useDispatch();
    return (
        <Form
            formValues={{} as FormValues}
            buttonName='Submit'
            onClose={onClose}
            onSubmit={(values) => {
                createMovies(
                    {
                        title: values.title,
                        release_date: values.release_date,
                        poster_path: values.poster_path,
                        genres: values.genres,
                        overview: values.overview,
                        runtime: values.runtime
                    }
                )(dispatch)
            }}
        />
    );
};

export default AddMovieForm;