import React from 'react';

export enum BUTTON_TYPES {
    BUTTON = 'button',
    SUBMIT = 'submit',
    RESET = 'reset',
}

export interface ButtonProps {
    name: string;
    className?: string;
    onClick?: (e) => void;
    type?: BUTTON_TYPES;
    id?: string;
    testId?: string;
}

export const Button = ({
   type,
   name,
   className,
   testId,
   onClick,
}: ButtonProps) => {
    return (
        <button type={type} data-testid={testId} className={className} onClick={onClick}>{name}</button>
    );
};