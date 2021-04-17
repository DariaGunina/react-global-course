import {Dispatch} from 'redux';
import {FormValues} from '../components/Form/Form';
import {
    createMovieRequest,
    deleteMovieRequest,
    getMoviesRequest,
    updateMovieRequest
} from '../api';
import {
    CLEAR_MOVIES,
    CREATE_MOVIES,
    DELETE_MOVIES,
    GET_MOVIES,
    UPDATE_MOVIES
} from './constants';
import {
    FilterKeys,
    SortKeys
} from './enums';

interface Params {
    filter?: FilterKeys;
    sort?: SortKeys;
    search?: string;
}

export const getMovies = (dispatch: Dispatch, {
    filter,
    sort,
    search
}: Params) => {
    getMoviesRequest({filter, sort, search}).then(
            (result) => {
               dispatch({
                   type: GET_MOVIES,
                   payload: result.data,
               });
            },
        );
};

export const createMovies = (dispatch: Dispatch, {
    title,
    release_date,
    poster_path,
    genres,
    overview,
    runtime
}: FormValues) => {
    createMovieRequest({
        title,
        release_date,
        poster_path,
        genres,
        overview,
        runtime
    }).then(
            (result) => {
                dispatch({
                    type: CREATE_MOVIES,
                    payload: [result],
                });
            },
        );
};

export const updateMovie = (dispatch: Dispatch, {
    title,
    release_date,
    poster_path,
    genres,
    overview,
    runtime,
    id
}: FormValues) => {
    updateMovieRequest({
        title,
        release_date,
        poster_path,
        genres,
        overview,
        runtime,
        id,
    }).then(
            (result) => {
                dispatch({
                    type: UPDATE_MOVIES,
                    payload: [result],
                });
            },
        );
};

export const deleteMovies = (dispatch: Dispatch, id) => {
    deleteMovieRequest(id).then(() => dispatch({
            type: DELETE_MOVIES,
            payload: id,
        }));
};

export const clearMovies = (dispatch: Dispatch) => {
    dispatch({
            type: CLEAR_MOVIES
        });
};