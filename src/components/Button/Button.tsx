import React from 'react';

export const enum BUTTON_TYPES {
    BUTTON = 'button',
    SUBMIT = 'submit',
    RESET = 'reset',
}

interface ButtonProps {
    name: string;
    className?: string;
    onClick?: (e) => void;
    type?: BUTTON_TYPES;
}

export const Button = ({
   type,
   name,
   className,
   onClick,
}: ButtonProps) => {
    return (
        <button type={type} className={className} onClick={onClick}>{name}</button>
    );
};