import React from 'react';
import {Header} from './components/Header/Header';
import {MovieContainer} from './components/MovieContainer/MovieContainer';
import {Footer} from './components/Footer/Footer';
import {Logo} from './components/Logo/Logo';

export const App = () => (
    <>
        <React.StrictMode>
            <Header />
            <MovieContainer />
            <Footer children={<Logo />} />
        </React.StrictMode>
    </>
);