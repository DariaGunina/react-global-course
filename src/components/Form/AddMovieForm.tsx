import React from 'react';
import {
    Form,
} from './Form';
import {useFormHandlers} from './useFormHandlers';

export const AddMovieForm = () => {
    const {values, setValues} = useFormHandlers({});

    return (
        <Form values={values} setValues={setValues} />
    );
};

export default AddMovieForm;