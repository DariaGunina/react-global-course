import React from 'react';
import {useDispatch} from 'react-redux';
import Link from 'next/link';
import {Logo} from '../Logo';
import {Button, BUTTON_TYPES} from '../Button';
import {SearchBlock} from '../SearchBlock';
import Background from '../../assets/image.jpg';
import {clearMovies} from '../../redux/action';
import {useNonNullContext} from '../../hooks/useNonNullContext';
import {FiltersContext} from '../MovieContainer/FiltersProvider';
import {Modal} from '../Modal';

const AddMovieForm = React.lazy(() => import('../Form/AddMovieForm'));

import styles from './Header.module.css';

const BackgroundStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
};

export const Header = () => {
    const [isOpenModal, setIsOpenModal] = React.useState(false);
    const {search, setSearch, filter, sort} = useNonNullContext(FiltersContext);
    const dispatch = useDispatch();

    const onClose = () => setIsOpenModal(false);
    const handleSearch = search !== '' ? `/search/${search}?sortBy=${sort}&filter=${filter}` : '/';

    return (
        <header className={styles.header} style={BackgroundStyle}>
            <div className={styles.content}>
                <Link href='/'>
                    <Logo onClick={() => {
                        clearMovies()(dispatch);
                    }} />
                </Link>
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
                                <AddMovieForm onClose={onClose} />
                            </React.Suspense>
                        </>
                    </Modal>
                </>
            </div>
            <SearchBlock onSearch={handleSearch} value={search} setValue={e => {setSearch(e.target.value)}} />
        </header>
    );
};