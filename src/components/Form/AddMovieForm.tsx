import React from 'react';
import {
    Form,
    FormValues
} from './Form';

export const AddMovieForm = () => {
    const [values, setValues] = React.useState<FormValues>({});

    const changeForm = (name, value) => {
        setValues(prevState => ({...prevState, [name]: value}))
    };

    return (
        <Form values={values} setValues={changeForm} />
    );
};

export default AddMovieForm;