import {Dispatch} from 'redux';
import {FormValues} from '../components/Form/Form';
import {
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

const headers = {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'};

export const getMovies = (dispatch: Dispatch, {
    filter,
    sort,
    search
}: Params) => {
    let url = `http://localhost:4000/movies?sortOrder=asc`;

    if(sort) {
        url = url+`&sortBy=${sort}`
    }

    if(filter && filter !== FilterKeys.ALL) {
        url = url+`&filter=${filter}`
    }

    if(search) {
        url = url+`&search=${search}&searchBy=title`
    }

    fetch(url)
        .then(res => res.json())
        .then(
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
    date,
    urlMovie,
    genre,
    overview,
    runtime
}: FormValues) => {
    let url = `http://localhost:4000/movies`;
    const data = JSON.stringify({
        title,
        release_date: date,
        poster_path: urlMovie,
        genres: genre,
        overview,
        runtime: Number(runtime),
    });
    fetch(url, {
        method: 'POST',
        headers,
        body: data,
    })
        .then(res => res.json())
        .then(
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
    date,
    urlMovie,
    genre,
    overview,
    runtime,
    id
}: FormValues) => {
    let url = `http://localhost:4000/movies`;
    const data = JSON.stringify({
        title,
        release_date: date,
        poster_path: urlMovie,
        genres: genre,
        overview,
        runtime,
        id,
    });

    fetch(url, {
        method: 'PUT',
        headers,
        body: data,
    })
        .then(res => res.json())
        .then(
            (result) => {
                dispatch({
                    type: UPDATE_MOVIES,
                    payload: [result],
                });
            },
        );
};

export const deleteMovies = (dispatch: Dispatch, id) => {
    let url = `http://localhost:4000/movies/${id}`;

    fetch(url, {
        method: 'DELETE'
    })
        .then(() => dispatch({
            type: DELETE_MOVIES,
            payload: id,
        }));
};