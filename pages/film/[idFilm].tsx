import React from 'react';
import {useSelector} from 'react-redux';
import Link from 'next/link';
import {RootReducer} from '../../src/store';
import {MovieState} from '../../src/redux/reducer';
import {getMovieRequest} from '../../src/api';
import {Logo} from '../../src/components/Logo';
import SearchIcon from '../../src/assets/search.svg';
import {MovieDetails} from '../../src/components/MovieDetails';
import {MovieContainer} from '../../src/components/MovieContainer';
import {Footer} from '../../src/components/Footer';
import Background from '../../src/assets/image.jpg';

import styles from '../../styles/MovieDetailsPage.module.css';

const BackgroundStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
};

const MovieDetailsPage = ({movie}) =>  {
    const {moviesList} = useSelector<RootReducer, MovieState>((state) => state.movies);

    return (
        <>
            <header className={styles.header} style={BackgroundStyle}>
                <div className={styles.content}>
                    <Link href='/'>
                        <Logo />
                    </Link>
                    <Link href='/'>
                        <img src={SearchIcon} className={styles.search} alt="image"/>
                    </Link>
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
            <MovieContainer data={moviesList} />
            <Footer />
        </>
    );
};

export async function getServerSideProps(context) {
    const query = context.query;
    const movie = await getMovieRequest(query.idFilm);

    return {props: {movie}}
}

export default MovieDetailsPage;