import {createStore, combineReducers, applyMiddleware} from "redux";
import {MovieReducer} from "./redux/reducer";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import {Movie} from "./redux/types";

export interface RootReducer {
    movies: {
        moviesList: Movie[];
    },
}

const rootReducer = combineReducers({
    movies: MovieReducer,
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            thunk,
        ),
    ),
);