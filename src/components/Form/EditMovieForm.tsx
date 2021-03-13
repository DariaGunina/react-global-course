import React from 'react';
import {
    Form,
    FormValues
} from './Form';
import {INITIAL_VALUES} from '../mocks';

export const EditMovieForm = () => {
    const [values, setValues] = React.useState<FormValues>(INITIAL_VALUES);

    const changeForm = (name, value) => {
        setValues(prevState => ({...prevState, [name]: value}))
    };

    return (
        <Form values={values} setValues={changeForm} />
    );
};

export default EditMovieForm;