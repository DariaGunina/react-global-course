import React from "react";
import {FormValues} from "./Form";

export const useFormHandlers = (initialValues: FormValues) => {
    const [values, setValues] = React.useState<FormValues>(initialValues);

    const changeForm = React.useCallback((name, value) => {
        setValues(prevState => ({...prevState, [name]: value}))
    }, []);

    return {
        values,
        setValues: changeForm,
    };
};