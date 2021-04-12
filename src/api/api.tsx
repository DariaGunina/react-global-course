import {FilterKeys, SortKeys} from '../redux/enums';
import {FormValues} from '../components/Form/Form';

interface Params {
    filter?: FilterKeys;
    sort?: SortKeys;
    search?: string;
}

const BASE_URL = 'http://localhost:4000/movies';

const headers = {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'};

export const getMoviesRequest = async ({
    filter,
    sort,
    search,
}: Params) => {
    let url = `${BASE_URL}?sortOrder=asc&search=${search ?? ''}&searchBy=title`;

    if(sort) {
        url = url+`&sortBy=${sort}`
    }

    if(filter && filter !== FilterKeys.ALL) {
        url = url+`&filter=${filter}`
    }

    const result = await fetch(url);
    return result.json();
};

export const getMovieRequest = async (id: string) => {
    const result = await fetch(`${BASE_URL}/${id}`, {
        method: 'GET',
        headers,
    });
    return result.json();
};

export const createMovieRequest = async ({
   title,
   release_date,
   poster_path,
   genres,
   overview,
   runtime,
}: FormValues) => {
    const data = JSON.stringify({
        title,
        release_date,
        poster_path,
        genres,
        overview,
        runtime: Number(runtime),
    });

    const result = await fetch(BASE_URL, {
        method: 'POST',
        headers,
        body: data,
    });

    return result.json();
};

export const updateMovieRequest = async ({
    title,
    release_date,
    poster_path,
    genres,
    overview,
    runtime,
    id
}: FormValues) => {
    const data = JSON.stringify({
        title,
        release_date,
        poster_path,
        genres,
        overview,
        runtime,
        id,
    });

    const result = await fetch(BASE_URL, {
        method: 'PUT',
        headers,
        body: data,
    });

    return result.json();
};

export const deleteMovieRequest = async (id: string) => {
    const result = await fetch(`${BASE_URL}/${id}`, {method: 'DELETE'});

    return result.json();
};
