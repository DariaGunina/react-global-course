import React from 'react';
import CloseIcon from '../../assets/cancel.svg';
import {Button} from '../Button';
import {Modal} from '../Modal';
import {initialValues} from '../mocks';

const Form = React.lazy(() => import('../Form/Form'));

import styles from './Menu.module.css';

interface MenuProps {
    closeMenu: () => void;
    className?: string;
}

export const Menu = ({closeMenu}:MenuProps) => {
    const [openEditModal, setOpenEditModal] = React.useState(false);
    const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

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
                    onClose={() => setOpenEditModal(false)}
                >
                    <>
                        <h1 className={styles.title}>Edit Movie</h1>
                        <React.Suspense fallback='loading...'>
                            <Form initialValues={initialValues} />
                        </React.Suspense >
                    </>
                </Modal>
                <Button
                    className={styles.button}
                    name='Delete'
                    onClick={() => setOpenDeleteModal(true)}
                />
                <Modal
                    open={openDeleteModal}
                    onClose={() => setOpenDeleteModal(false)}
                >
                    <div className={styles.content}>
                        <h1 className={styles.title}>Delete Movie</h1>
                        <p className={styles.subtitle}>Are you sure you want to delete this movie?</p>
                        <div className={styles.buttonConfirmWrapper}>
                            <Button
                                className={styles.buttonConfirm}
                                name='Confirm'
                                onClick={() => setOpenDeleteModal(false)}
                            />
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
};