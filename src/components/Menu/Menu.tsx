import React from 'react';
import {useDispatch} from 'react-redux';
import CloseIcon from '../../assets/cancel.svg';
import {Button} from '../Button';
import {Modal} from '../Modal';
import {deleteMovies} from '../../redux/action';

const EditMovieForm = React.lazy(() => import('../Form/EditMovieForm'));

import styles from './Menu.module.css';

interface MenuProps {
    closeMenu: () => void;
    className?: string;
    id: number;
}

export const Menu = ({closeMenu, id}: MenuProps) => {
    const dispatch = useDispatch();
    const [openEditModal, setOpenEditModal] = React.useState(false);
    const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

    const onCloseModal = (setOpenModal: () => void) => {
        setOpenModal();
        closeMenu();
    };

    return (
        <div className={styles.menu}>
            <div className={styles.iconContent}>
                <CloseIcon onClick={closeMenu} className={styles.icon} />
            </div>
            <div className={styles.buttons}>
                <Button
                    className={styles.button}
                    name='Edit'
                    onClick={() => setOpenEditModal(true)}
                />
                <Modal
                    open={openEditModal}
                    onClose={() => onCloseModal(() => setOpenEditModal(false))}
                >
                    <>
                        <h1 className={styles.title}>Edit Movie</h1>
                        <React.Suspense fallback='loading...'>
                            <EditMovieForm id={id} />
                        </React.Suspense >
                    </>
                </Modal>
                <Button
                    className={styles.button}
                    name='Delete'
                    onClick={() => {
                        setOpenDeleteModal(true);
                    }}
                />
                <Modal
                    open={openDeleteModal}
                    onClose={() => onCloseModal(() => setOpenDeleteModal(false))}
                >
                    <div className={styles.content}>
                        <h1 className={styles.title}>Delete Movie</h1>
                        <p className={styles.subtitle}>Are you sure you want to delete this movie?</p>
                        <div className={styles.buttonConfirmWrapper}>
                            <Button
                                className={styles.buttonConfirm}
                                name='Confirm'
                                onClick={() => {
                                    deleteMovies(dispatch, id);
                                    setOpenDeleteModal(false);
                                }}
                            />
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
};