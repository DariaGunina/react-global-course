import React from 'react';
import {Header} from './components/Header';
import {MovieContainer} from './components/MovieContainer';
import {Footer} from './components/Footer';
import {MovieProvider} from './components/MovieDetails';

export const App = () =>
    <React.StrictMode>
        <MovieProvider>
            <>
                <Header />
                <MovieContainer />
            </>
        </MovieProvider>
        <Footer />
    </React.StrictMode>