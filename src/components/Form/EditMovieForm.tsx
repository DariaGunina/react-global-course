import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    Form,
} from './Form';
import {RootReducer} from '../../store';
import {MovieState} from '../../redux/reducer';
import {updateMovie} from '../../redux/action';

interface EditMovieFormProps {
    id: number;
    onClose: () => void;
}

export const EditMovieForm = ({id, onClose}: EditMovieFormProps) => {
    const dispatch = useDispatch();
    const {moviesList} = useSelector<RootReducer, MovieState>((state) => state.movies);
    const currentMovie = moviesList?.find(movie => movie.id === id);

    return (
        <Form
            formValues={{
                title: currentMovie?.title,
                release_date: currentMovie?.release_date,
                poster_path: currentMovie?.poster_path,
                genres: currentMovie?.genres,
                overview: currentMovie?.overview,
                runtime: currentMovie?.runtime,
                id: currentMovie?.id,
            }}
            onSubmit={(values) => updateMovie(dispatch, {
                title: values.title,
                release_date: values.release_date,
                poster_path: values.poster_path,
                genres: values.genres,
                overview: values.overview,
                runtime: values.runtime,
                id: values.id,
            })}
            buttonName='Save'
            onClose={onClose}
            movieID={id}
            titleID='Movie ID'
        />
    );
};

export default EditMovieForm;