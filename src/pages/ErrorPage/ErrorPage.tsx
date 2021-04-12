import React from 'react';
import {useHistory} from 'react-router';
import {Logo} from '../../components/Logo';
import ErrorIcon from '../../assets/error.svg';
import {Button, BUTTON_TYPES} from '../../components/Button';
import {Footer} from '../../components/Footer';

import styles from './ErrorPage.module.css';

export const ErrorPage = () => {
    const history = useHistory();

    const goBackToHome = () => {
        history.push('/');
    };

    return (
        <>
            <div className={styles.container}>
                <Logo />
                <div className={styles.content}>
                    <h1 className={styles.title}>Page note found</h1>
                    <ErrorIcon className={styles.icon} />
                    <Button
                        className={styles.button}
                        name="Go back to home"
                        type={BUTTON_TYPES.BUTTON}
                        onClick={goBackToHome}
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};