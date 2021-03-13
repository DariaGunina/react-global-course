import React from 'react';
import {Logo} from '../Logo';
import {Button} from '../Button';
import {SearchBlock} from '../SearchBlock';
import Background from '../../assets/image.jpg';
import {Modal} from '../Modal';

const AddMovieForm = React.lazy(() => import('../Form/AddMovieForm'));

import styles from './Header.module.css';

const BackgroundStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover'
};

export const Header = () => {
    const [isOpenModal, setIsOpenModal] = React.useState(false);

    return (
        <header className={styles.header} style={BackgroundStyle}>
            <div className={styles.content}>
                <Logo />
                <Button className={styles.button} name='+ Add Movie' onClick={() => setIsOpenModal(true)} />
                <Modal open={isOpenModal} onClose={() => setIsOpenModal(false)}>
                    <>
                        <h1 className={styles.title}>Add Movie</h1>
                        <React.Suspense fallback='loading...'>
                            <AddMovieForm />
                        </React.Suspense>
                    </>
                </Modal>
            </div>
            <SearchBlock />
        </header>
    );
};