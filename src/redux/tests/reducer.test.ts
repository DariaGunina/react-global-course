import {Movie} from '../types';
import {ActionType, MovieReducer} from '../reducer';
import {
    CLEAR_MOVIES,
    CREATE_MOVIES,
    DELETE_MOVIES,
    GET_MOVIES,
    UPDATE_MOVIES
} from '../constants';
import {
    mockData,
    mockDeleteMovie,
    mockMovieList,
    mockMovieListWithoutItem,
    mockUpdateMovie,
    newMockListMovie,
} from './mocks';

const initialState = {
    moviesList: [] as Movie[]
};

describe('MovieReducer', () => {
    let state: { moviesList: Movie[] };

    beforeEach(() => {
        state = {...initialState};
    });

    it('should return the initial state', () => {
        expect(MovieReducer(undefined, {} as ActionType)).toEqual(state);
    });

    describe('on GET_MOVIES', () => {
        const getMoviesAction = {
            type: GET_MOVIES,
            payload: mockData,
        };
        beforeEach(() => {
            state = {moviesList: mockMovieList};
        });

        it('should populates store with given data', () => {
            expect(MovieReducer(state, getMoviesAction)).toEqual({'moviesList': mockData});
        });
    });

    describe('on CREATE_MOVIES', () => {
        const createMoviesAction = {
            type: CREATE_MOVIES,
            payload: mockData,
        };

        beforeEach(() => {
            state = {moviesList: mockMovieList};
        });

        it('should adds a movie to the existing ones', () => {
            expect(MovieReducer(state, createMoviesAction)).toEqual({'moviesList': [...state.moviesList, ...mockData]});
        });
    });


    describe('on UPDATE_MOVIES', () => {
        const updateMoviesAction = {
            type: UPDATE_MOVIES,
            payload: mockUpdateMovie,
        };

        beforeEach(() => {
            state = {moviesList: mockMovieList};
        });

        it('should handle UPDATE_MOVIES', () => {
            expect(MovieReducer(state, updateMoviesAction)).toEqual({'moviesList': newMockListMovie});
        });
    });

    describe('on DELETE_MOVIES', () => {
        const deleteMoviesAction = {
            type: DELETE_MOVIES,
            payload: mockDeleteMovie,
        };

        beforeEach(() => {
            state = {moviesList: mockMovieListWithoutItem};
        });

        it('should delete movie', () => {

            expect(MovieReducer(state, deleteMoviesAction)).toEqual({'moviesList': mockMovieListWithoutItem});
        });
    });

    describe('on CLEAR_MOVIES', () => {
        const clearMoviesAction = {
            type: CLEAR_MOVIES,
            payload: [],
        };

        beforeEach(() => {
            state = {moviesList: mockMovieList};
        });

        it('should clear all movies', () => {

            expect(MovieReducer(state, clearMoviesAction)).toEqual({'moviesList': []});
        });
    });
});