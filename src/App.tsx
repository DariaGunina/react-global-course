import React from 'react';
import {Provider} from 'react-redux';
import {Route, Router, Switch} from 'react-router';
import {createBrowserHistory} from 'history';
import {store} from './store';
import {MovieProvider} from './components/MovieDetails';
import {FiltersProvider} from './components/MovieContainer/FiltersProvider';
import {SearchPage} from './pages/SearchPage';
import {HomePage} from './pages/HomePage';
import {MovieDetailsPage} from './pages/MovieDetailsPage';
import {ErrorPage} from './pages/ErrorPage';

import styles from './App.module.css';

const history = createBrowserHistory();

export const App = () =>
    <React.StrictMode>
            <Provider store={store}>
                <MovieProvider>
                    <FiltersProvider>
                        <main className={styles.container}>
                            <Router history={history}>
                                <Switch>
                                    <Route path='/' exact component={HomePage} />
                                    <Route path='/film/:id' component={MovieDetailsPage} />
                                    <Route path='/search/:Search' component={SearchPage} />
                                    <Route path='*' component={ErrorPage} />
                                </Switch>
                            </Router>
                        </main>
                    </FiltersProvider>
                </MovieProvider>
            </Provider>
    </React.StrictMode>;