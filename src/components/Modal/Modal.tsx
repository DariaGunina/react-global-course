import React from 'react';
import CancelIcon from '../../assets/cancel.svg';
import ReactDom from 'react-dom';

import styles from './Modal.module.css';

interface ModalProps {
    children?: React.ReactNode;
    open: boolean;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({
    open,
    children,
    onClose,
}) => {
    if(!open) return null

    return ReactDom.createPortal(
        <div className={styles.wrapper}>
            <div className={styles.overlay} onClick={onClose}/>
            <div className={styles.modal}>
                <div className={styles.wrapperIcon}>
                    <CancelIcon className={styles.icon} onClick={onClose} />
                </div>
                {children}
            </div>
        </div>,
        document.getElementById('portal') as HTMLElement
    );
};