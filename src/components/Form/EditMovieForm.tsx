import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    Form,
} from './Form';
import {useFormHandlers} from '../../hooks/useFormHandlers';
import {RootReducer} from '../../store';
import {MovieState} from '../../redux/reducer';
import {updateMovie} from '../../redux/action';

export const EditMovieForm = ({id}: {id: number}) => {
    const dispatch = useDispatch();
    const {moviesList} = useSelector<RootReducer, MovieState>((state) => state.movies);
    const currentMovie = moviesList?.find(movie => movie.id === id);
    const {values, setValues, reset} = useFormHandlers({
        title: currentMovie?.title,
        date: currentMovie?.release_date,
        urlMovie: currentMovie?.poster_path,
        genre: currentMovie?.genres,
        overview: currentMovie?.overview,
        runtime: currentMovie?.runtime,
        id: currentMovie?.id,
    });

    return (
        <Form
            values={values}
            setValues={setValues}
            onSubmit={()=> updateMovie(dispatch, values)}
            onReset={reset}
        />
    );
};

export default EditMovieForm;