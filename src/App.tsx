import React from 'react';
import {Header} from './components/Header';
import {MovieContainer} from './components/MovieContainer';
import {Footer} from './components/Footer';

export const App = () => (
    <>
        <React.StrictMode>
            <Header />
            <MovieContainer />
            <Footer />
        </React.StrictMode>
    </>
);