import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import {Header} from './components/Header';
import {MovieContainer} from './components/MovieContainer';
import {Footer} from './components/Footer';
import {MovieProvider} from './components/MovieDetails';
import {FiltersProvider} from "./components/MovieContainer/FiltersProvider";

export const App = () =>
    <React.StrictMode>
        <Provider store={store}>
            <MovieProvider>
                <FiltersProvider>
                    <Header />
                    <MovieContainer />
                </FiltersProvider>
            </MovieProvider>
            <Footer />
        </Provider>
    </React.StrictMode>;