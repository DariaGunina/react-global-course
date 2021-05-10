import {MovieState} from '../reducer';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store'
import {
    clearMovies,
    createMovies,
    deleteMovies, dispatchMovies,
    getMovies,
    updateMovie
} from '../action';
import {
    CLEAR_MOVIES,
    CREATE_MOVIES,
    DELETE_MOVIES,
    GET_MOVIES,
    UPDATE_MOVIES
} from '../constants';
import * as api from '../../api'
import {
    mockCreateData,
    mockData,
    mockUpdateData
} from './mocks';

jest.mock('../../api', () => ({
    getMoviesRequest: jest.fn(),
    getMovieRequest: jest.fn(),
    createMovieRequest: jest.fn(),
    updateMovieRequest: jest.fn(),
    deleteMovieRequest: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('action', () => {

    describe('on getMovies action', () => {
        jest.spyOn(api, 'getMoviesRequest').mockImplementation(() =>
            Promise.resolve({data: mockData})
        );
        it('should return getMovies action', async () => {
            const expectedActions = [
                {
                    type: GET_MOVIES,
                    payload: mockData,
                },
            ];

            const store = mockStore<MovieState>({'moviesList': []});
            await store.dispatch(getMovies({search: ''}));

            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    describe('on dispatchMovies action', () => {
        it('should return dispatchMovies action', async () => {
            const expectedActions = [
                {
                    type: GET_MOVIES,
                    payload: mockData,
                }
            ];

            const store = mockStore<MovieState>({'moviesList': []});
            await store.dispatch(dispatchMovies(mockData));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    describe('on createMovies action', () => {
        jest.spyOn(api, 'createMovieRequest').mockImplementation(() =>
            Promise.resolve({data: mockData})
        );
        it('should return createMovies action', async () => {
            const expectedActions = [
                {
                    type: CREATE_MOVIES,
                    payload: [{data: mockData}],
                },
            ];

            const store = mockStore<MovieState>({'moviesList': []});
            await store.dispatch(createMovies(mockCreateData));

            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    describe('on updateMovies action', () => {
        jest.spyOn(api, 'updateMovieRequest').mockImplementation(() =>
            Promise.resolve({data: mockData})
        );
        it('should return updateMovie action', async () => {
            const expectedActions = [
                {
                    type: UPDATE_MOVIES,
                    payload: [{data: mockData}],
                },
            ];

            const store = mockStore<MovieState>({'moviesList': []});
            await store.dispatch(updateMovie(mockUpdateData));

            expect(store.getActions()).toEqual(expectedActions);

        });
    });

    describe('on deleteMovies action', () => {
        jest.spyOn(api, 'deleteMovieRequest').mockImplementation(() =>
            Promise.resolve({data: mockData})
        );
        it('should return deleteMovies action', async () => {
            const expectedActions = [
                {
                    type: DELETE_MOVIES,
                    payload: [],
                }
            ];

            const store = mockStore<MovieState>({'moviesList': []});
            await store.dispatch(deleteMovies([]));

            expect(store.getActions()).toEqual(expectedActions);

        });
    });

    describe('on clearMovies action', () => {
        it('should return clearMovies action', async () => {
            const expectedActions = [
                {
                    type: CLEAR_MOVIES,
                }
            ];

            const store = mockStore<MovieState>({'moviesList': []});
            await store.dispatch(clearMovies());

            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});