import React from 'react';
import {useDispatch} from 'react-redux';
import {
    Form,
} from './Form';
import {useFormHandlers} from '../../hooks/useFormHandlers';
import {createMovies} from '../../redux/action';

export const AddMovieForm = () => {
    const dispatch = useDispatch();
    const {values, setValues, reset} = useFormHandlers({});

    return (
        <Form
            values={values}
            setValues={setValues}
            onReset={reset}
            onSubmit={() => {
                createMovies(
                    dispatch,
                    {
                        title: values.title,
                        date: values.date,
                        urlMovie: values.urlMovie,
                        genre: values.genre,
                        overview: values.overview,
                        runtime: values.runtime
                    }
                )
            }}
        />
    );
};

export default AddMovieForm;