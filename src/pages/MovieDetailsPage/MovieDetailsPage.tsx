import React from 'react';
import {useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router';
import {MovieDetails} from '../../components/MovieDetails';
import {RootReducer} from '../../store';
import {MovieState} from '../../redux/reducer';
import {Logo} from '../../components/Logo';
import SearchIcon from '../../assets/search.svg';
import Background from '../../assets/image.jpg';
import {MovieContainer, Mode} from '../../components/MovieContainer';
import {Footer} from '../../components/Footer';
import {Counter} from '../../components/Сounter';
import {Movie} from '../../redux/types';
import {getMovieRequest} from '../../api';

import styles from '../../components/Header/Header.module.css';

const BackgroundStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
};

export const MovieDetailsPage = () => {
    const {moviesList} = useSelector<RootReducer, MovieState>((state) => state.movies);
    const { id } = useParams<{id: string}>();
    const [movie, setMovie] = React.useState<Movie | null>(null);

    React.useEffect(() => {
        getMovieRequest(id).then(
            (result) => {
                setMovie(result)
            },
        );
    }, [id]);

    const history = useHistory();

    const goBackToHome = () => {
        history.push('/');
    };

    return (
        <>
            <header className={styles.header} style={BackgroundStyle}>
                <div className={styles.content}>
                    <Logo onClick={goBackToHome} />
                    <SearchIcon
                        className={styles.search}
                        onClick={goBackToHome}
                    />
                </div>
                {
                    movie &&
                    <MovieDetails
                        title={movie.title}
                        runtime={movie.runtime}
                        overview={movie.overview}
                        date={movie.release_date}
                        vote={movie.vote_average}
                        poster={movie.poster_path}
                        tagline={movie.tagline}
                    />
                }
            </header>
            <MovieContainer
                mode={Mode.DETAILS}
                counter={<Counter count={moviesList.length}/>}
            />
            <Footer />
        </>
    );
};