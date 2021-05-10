import React from 'react';
import Link from 'next/link';
import {Logo} from '../src/components/Logo';
import ErrorIcon from '../src/assets/error.svg';
import {Footer} from '../src/components/Footer';

import styles from '../styles/ErrorPage.module.css';

const ErrorPage = () =>  (
    <>
        <div className={styles.container}>
            <Link href='/'>
                <Logo />
            </Link>
            <div className={styles.content}>
                <h1 className={styles.title}>Page note found</h1>
                <img src={ErrorIcon} className={styles.icon}  alt="image"/>
                <Link href='/'>
                    <a className={styles.link}>Go Back to Home</a>
                </Link>
            </div>
        </div>
        <Footer />
    </>
);

export default ErrorPage;