import React from 'react';
import {useDispatch} from 'react-redux';
import CloseIcon from '../../assets/cancel.svg';
import {Button, BUTTON_TYPES} from '../Button';
import {deleteMovies} from '../../redux/action';
import Modal from '../Modal/Modal';

import styles from './Menu.module.css';

const EditMovieForm = React.lazy(() => import('../Form/EditMovieForm'));

export interface MenuProps {
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
                <img src={CloseIcon} onClick={closeMenu} className={styles.icon} alt="image"/>
            </div>
            <div className={styles.buttons}>
                <Button
                    className={styles.button}
                    name='Edit'
                    onClick={() => setOpenEditModal(true)}
                    type={BUTTON_TYPES.BUTTON}
                    data-test="edit-button"
                />
                <Modal
                    open={openEditModal}
                    onClose={() => onCloseModal(() => setOpenEditModal(false))}
                    data-test="edit-modal"
                >
                    <>
                        <h1 className={styles.title}>Edit Movie</h1>
                        <React.Suspense fallback='loading...'>
                            <EditMovieForm
                                onClose={() => onCloseModal(() => setOpenEditModal(false))}
                                id={id}
                                data-test='edit'
                            />
                        </React.Suspense >
                    </>
                </Modal>
                <Button
                    className={styles.button}
                    name='Delete'
                    type={BUTTON_TYPES.BUTTON}
                    onClick={() => {
                        setOpenDeleteModal(true);
                    }}
                    data-test="delete-button"
                />
                <Modal
                    open={openDeleteModal}
                    onClose={() => onCloseModal(() => setOpenDeleteModal(false))}
                    data-test="delete-modal"
                >
                    <div className={styles.content}>
                        <h1 className={styles.title}>Delete Movie</h1>
                        <p className={styles.subtitle}>Are you sure you want to delete this movie?</p>
                        <div className={styles.buttonConfirmWrapper}>
                            <Button
                                className={styles.buttonConfirm}
                                name='Confirm'
                                type={BUTTON_TYPES.BUTTON}
                                onClick={() => {
                                    deleteMovies(id)(dispatch);
                                    setOpenDeleteModal(false);
                                }}
                                data-test="confirm-button"
                            />
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
};