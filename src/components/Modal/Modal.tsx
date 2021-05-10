import React from 'react';
import ModalPortal from './ModalPortal';
import CancelIcon from '../../assets/cancel.svg';

import styles from './Modal.module.css';

interface ModalProps {
    children?: JSX.Element;
    open: boolean;
    onClose: () => void;
}

const Modal = ({
    open,
    children,
    onClose,
}: ModalProps) => {
    if(!open) return null

    return (
        <ModalPortal selector="#modal">
            <div className={styles.wrapper}>
                <div className={styles.overlay} onClick={onClose}/>
                <div className={styles.modal}>
                    <div className={styles.wrapperIcon}>
                        <img src={CancelIcon} className={styles.icon} onClick={onClose} alt="image" />
                    </div>
                    {children}
                </div>
            </div>
        </ModalPortal>
    )
};

export default Modal;