import React from 'react';
import {useHistory} from 'react-router';
import {useDispatch} from 'react-redux';
import {Logo} from '../Logo';
import {Button, BUTTON_TYPES} from '../Button';
import {SearchBlock} from '../SearchBlock';
import {Modal} from '../Modal';
import Background from '../../assets/image.jpg';
import {clearMovies} from '../../redux/action';
import {useNonNullContext} from '../../hooks/useNonNullContext';
import {FiltersContext} from '../MovieContainer/FiltersProvider';

const AddMovieForm = React.lazy(() => import('../Form/AddMovieForm'));

import styles from './Header.module.css';

const BackgroundStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
};

export const Header = () => {
    const [isOpenModal, setIsOpenModal] = React.useState(false);
    const {search, setSearch} = useNonNullContext(FiltersContext);

    const history = useHistory();
    const dispatch = useDispatch();

    const onSearch = () => {
        history.push(`/search/${search}`);
    };

    const goBackToHome = () => {
        history.push('/');
    };

    return (
        <header className={styles.header} style={BackgroundStyle}>
            <div className={styles.content}>
                <Logo onClick={() => {
                    clearMovies(dispatch);
                    goBackToHome();
                }} />
                <>
                    <Button
                        className={styles.button}
                        name='+ Add Movie'
                        onClick={() => setIsOpenModal(true)}
                        type={BUTTON_TYPES.BUTTON}
                    />
                    <Modal open={isOpenModal} onClose={() => setIsOpenModal(false)}>
                        <>
                            <h1 className={styles.title}>Add Movie</h1>
                            <React.Suspense fallback='loading...'>
                                <AddMovieForm onClose={() => setIsOpenModal(false)} />
                            </React.Suspense>
                        </>
                    </Modal>
                </>
            </div>
            <SearchBlock onSearch={onSearch} value={search} setValue={e => {setSearch(e.target.value)}} />
        </header>
    );
};