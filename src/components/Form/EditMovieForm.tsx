import React from 'react';
import {
    Form,
} from './Form';
import {INITIAL_VALUES} from '../mocks';
import {useFormHandlers} from './useFormHandlers';

export const EditMovieForm = () => {
    const {values, setValues} = useFormHandlers(INITIAL_VALUES);

    return (
        <Form values={values} setValues={setValues} />
    );
};

export default EditMovieForm;