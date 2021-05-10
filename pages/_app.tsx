import React from 'react';
import {Provider} from 'react-redux';
import type { AppProps } from 'next/app';
import {store} from '../src/store';
import {MovieProvider} from '../src/components/MovieDetails';
import {FiltersProvider} from '../src/components/MovieContainer/FiltersProvider';

import '../styles/style.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
    <React.StrictMode>
        <Provider store={store}>
            <MovieProvider>
                <FiltersProvider>
                    <main>
                        <Component {...pageProps} />
                    </main>
                </FiltersProvider>
            </MovieProvider>
        </Provider>
    </React.StrictMode>
);

export default App;