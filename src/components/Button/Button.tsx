import React from 'react';

interface ButtonProps {
    name: string;
    className?: string;
    onClick: (e) => void;
}

export const Button = ({
   name,
   className,
   onClick,
}: ButtonProps) => {
    return (
        <button className={className} onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}>{name}</button>
    );
};