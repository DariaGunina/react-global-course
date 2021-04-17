import {Movie} from './types';
import {
    CLEAR_MOVIES,
    CREATE_MOVIES,
    DELETE_MOVIES,
    GET_MOVIES,
    UPDATE_MOVIES
} from './constants';

const initialState = { moviesList: [] as Movie[] };

interface ActionType {
    type: string;
    payload: Movie[];
}

export interface MovieState {
    moviesList: Movie[];
}

export const MovieReducer = (state = initialState, action: ActionType): MovieState => {
    const deleteItem = (list, id) => list.filter((movie) => movie.id !== id);

    const editItem = (list, editedMovie) => list.map(item => item.id === editedMovie.id ? editedMovie : item);

    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                moviesList: action.payload as Movie[],
            };
        case CREATE_MOVIES:
            return {
                ...state,
                moviesList: [...state.moviesList, ...action.payload],
            };
        case UPDATE_MOVIES:
            return {
                ...state,
                moviesList: editItem(state.moviesList, action.payload[0]),
            };
        case DELETE_MOVIES:
            return {
                ...state,
                moviesList: deleteItem(state.moviesList, action.payload),
            };
        case CLEAR_MOVIES:
            return {
                ...state,
                moviesList: [],
            };
        default:
            return state;
    }
};