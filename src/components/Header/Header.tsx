import React from 'react';
import {Logo} from '../Logo';
import {Button} from '../Button';
import {SearchBlock} from '../SearchBlock';
import {Modal} from '../Modal';
import {MovieContext} from '../MovieDetails';
import {MovieDetails} from '../MovieDetails';
import Background from '../../assets/image.jpg';
import SearchIcon from '../../assets/search.svg';
import {useDispatch, useSelector} from 'react-redux';
import {RootReducer} from '../../store';
import {MovieState} from '../../redux/reducer';
import {getMovies} from '../../redux/action';
import {useNonNullContext} from '../../hooks/useNonNullContext';
import {FiltersContext} from '../MovieContainer/FiltersProvider';

const AddMovieForm = React.lazy(() => import('../Form/AddMovieForm'));

import styles from './Header.module.css';

const BackgroundStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover'
};

export const Header = () => {
    const dispatch = useDispatch();
    const {search, setSearch, sort, filter} = useNonNullContext(FiltersContext);

    const onSearch = () => getMovies(dispatch, {search, sort, filter});

    const [isOpenModal, setIsOpenModal] = React.useState(false);
    const {activeMovie, setActiveMovie} = React.useContext(MovieContext);
    const {moviesList} = useSelector<RootReducer, MovieState>((state) => state.movies);

    const getMovieById = React.useMemo(() => {
       return moviesList?.find(item => item.id === activeMovie);
    },[activeMovie]);

    return (
        <header className={styles.header} style={BackgroundStyle}>
            <div className={styles.content}>
                <Logo onClick={() => setActiveMovie(null)} />
                {
                    activeMovie ?
                        <SearchIcon className={styles.search} onClick={() => setActiveMovie(null)} /> :
                        <>
                            <Button className={styles.button} name='+ Add Movie' onClick={() => setIsOpenModal(true)} />
                            <Modal open={isOpenModal} onClose={() => setIsOpenModal(false)}>
                                <>
                                    <h1 className={styles.title}>Add Movie</h1>
                                    <React.Suspense fallback='loading...'>
                                        <AddMovieForm />
                                    </React.Suspense>
                                </>
                            </Modal>
                        </>
                }
            </div>
            {
                activeMovie && getMovieById
                    ? <MovieDetails
                        title={getMovieById.title}
                        runtime={getMovieById.runtime}
                        overview={getMovieById.overview}
                        date={getMovieById.release_date}
                        vote={getMovieById.vote_average}
                        poster={getMovieById.poster_path}
                        tagline={getMovieById.tagline}
                        />
                    : <SearchBlock onSearch={onSearch} value={search} setValue={e => setSearch(e.target.value)} />
            }
        </header>
    );
};